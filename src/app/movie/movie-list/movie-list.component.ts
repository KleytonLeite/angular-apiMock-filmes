import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { MoviesService } from 'src/app/core/movies.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  readonly noPhoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigParams = {
    page: 0,
    limite: 4,
  };

  movies:  Movie[] = [];
  genres: Array<string>;
  filterListing: FormGroup;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.filterListing = this.fb.group({
      text: [''],
      genre: ['']
    });

    this.filterListing.get('text').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.search = val;
      this.restConsultList();
    })
    this.filterListing.get('genre').valueChanges.subscribe((val: string) => {
      this.config.field = {type: 'genre', value: val};
      this.restConsultList();
    })
    this.genres = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção científica','Comedia', 'Drama'];

    this.listMovies();
  }

  open(id: number): void {
    this.router.navigateByUrl('/movies/' + id);
  }

  onScroll(){
    this.listMovies();
  }

  private listMovies(): void {
    this.config.page++;
    this.moviesService.list(this.config)
      .subscribe((movies: Movie[]) => this.movies.push(...movies));
  }

  private restConsultList(): void {
    this.config.page = 0;
    this.movies = [];
    this.listMovies();
  }


}
