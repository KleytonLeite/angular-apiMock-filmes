import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  readonly qtdPage = 4;
  page = 0;
  text = '';
  genre ='';
  movies:  Movie[] = [];
  genres: Array<string>;
  filterListing: FormGroup;

  constructor(
    private moviesService: MoviesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.filterListing = this.fb.group({
      text: [''],
      genre: ['']
    });

    this.filterListing.get('text').valueChanges.subscribe((val: string) => {
      this.text = val;
      this.restConsultList();
    })
    this.filterListing.get('genre').valueChanges.subscribe((val: string) => {
      this.genre = val;
      this.restConsultList();
    })
    this.genres = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção científica','Comedia', 'Drama'];

    this.listMovies();
  }

  onScroll(){
    this.listMovies();
  }

  private listMovies(): void {
    this.page++;
    this.moviesService.list(this.page, this.qtdPage, this.text, this.genre)
      .subscribe((movies: Movie[]) => this.movies.push(...movies));
  }

  private restConsultList(): void {
    this.page = 0;
    this.movies = [];
    this.listMovies();
  }

  open() {

  }

}
