import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  readonly noPhoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  movie: Movie;
  id: number;

  constructor(
    public dialog: MatDialog,
    private activtedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.id = this.activtedRoute.snapshot.params['id'];
    this.movieView();
  }

  back() {
    this.router.navigate([`movies`]);
  }

  delete() {
    const config = {
      data: {
          title: 'Você tem ceretza que deseja excluir?',
          description: 'Caso você tenha certeza que deseja excluir, clicar no botão OK',
          corBtnSuccess: 'primary',
          corBtnCancel: 'warn',
          possuirBtnFechar: true,
      }  as Alert,
    }
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((option: boolean) => {
      if(option) {
        this.moviesService.delete(this.id).subscribe(() => this.router.navigateByUrl('/movies'));
      }
    })
  }

  private movieView(): void {
    this.moviesService.view(this.id).subscribe((movie: Movie) => this.movie = movie);
  }

}
