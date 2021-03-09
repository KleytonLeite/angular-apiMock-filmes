import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  readonly noPhoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  movie: Movie;

  constructor(
    private activtedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  this.movieView(this.activtedRoute.snapshot.params['id']);
  }

  back() {
    this.router.navigate([`movies`]);
  }

  private movieView(id: number): void {
    this.moviesService.view(id).subscribe((movie: Movie) => this.movie = movie);
  }

}
