import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-register',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.scss']
})
export class MovieRegisterComponent implements OnInit {

  register: FormGroup;
  genres: Array<string>;

  constructor(
    private router: Router,
    public validate: ValidateFieldsService,
    private fb: FormBuilder,
    private moviesService: MoviesService,
    ) { }

  get f() {
    return this.register.controls;
  }

  ngOnInit() {

    this.register = this.fb.group({
     title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
     urlPhotograph: ['', [Validators.minLength(10)]],
     dtLaunch: ['', [Validators.required]],
     description: [''],
     note: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
     urlIMDb: ['', [Validators.minLength(10)]],
     genre: ['',[Validators.required]],

  });

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

private saveMovie(movie: Movie): void {
  this.moviesService.save(movie).subscribe(() => {
      alert('SUCCESS!!!');
    },
    () => {
      alert('ERRO AO SALVER!!');
    });
  }
}
