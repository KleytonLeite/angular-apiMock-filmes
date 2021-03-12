import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-register',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.scss']
})
export class MovieRegisterComponent implements OnInit {

  id: number;
  register: FormGroup;
  genres: Array<string>;

  constructor(
    public validate: ValidateFieldsService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    ) { }

  get f() {
    return this.register.controls;
  }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.moviesService.view(this.id)
      .subscribe((movie: Movie) => 
      this.createForm(movie));
    }else {
      this.createForm(this.createMovieWhite());
    }

  this.genres = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção científica','Comedia', 'Drama'];

}

onSubmit(): void {
  this.register.markAllAsTouched();
  if (this.register.invalid) {
    return;
  }
const movie = this.register.getRawValue() as Movie;
this.saveMovie(movie);
}

reloadForm(): void {
this.register.reset();
}


back() {
  this.router.navigate([`movies`]);
}

private createForm(movie: Movie): void {
  this.register = this.fb.group({
     title: [movie.title, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
     urlPhoto: [movie.urlPhoto, [Validators.minLength(10)]],
     dtLaunch: [movie.dtLaunch, [Validators.required]],
     description: [movie.description],
     note: [movie.note, [Validators.required, Validators.min(0), Validators.max(10)]],
     urlIMDb: [movie.urlIMDb, [Validators.minLength(10)]],
     genre: [movie.genre,[Validators.required]],

  });
}

private createMovieWhite(): Movie {
  return {
    id: null,
    title: null,
    urlPhoto: null,
    dtLaunch: null,
    description: null,
    note: null,
    urlIMDb: null,
    genre: null
 } as Movie;
}
 
private saveMovie(movie: Movie): void {
  this.moviesService.save(movie).subscribe(() => {
    const config = {
      data: {
      btnSuccess: 'Ir para a listagem',
      btnCancel:'Cadastrar novo filme',
      corBtnCancel:'primary',
      possuirBtnFechar: true,
      }  as Alert,
    }
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((option: boolean) => {
      if(option) {
        this.router.navigateByUrl('movies');
      }else {
        this.reloadForm();
      }

    })
    },
    () => {
      const config = {
        data: {
          title: 'Erro ao salvar o regitro!',
          description: 'Não foi possivel salvar o seu registro, por favor tentar mais tarde',
          corBtnSuccess:'warn',
          btnSuccess: 'Fechar',
        }  as Alert,
    };
      this.dialog.open(AlertComponent, config);
  });
  }
}
