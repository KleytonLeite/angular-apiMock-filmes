import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieRegisterComponent } from './movie/movie-register/movie-register.component';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
},
{
  path: 'movies',
  children: [
    {
      path: '',
      component: MovieListComponent,
    },
    {
      path: 'register',
      component: MovieRegisterComponent,
      pathMatch: 'full'
    }
  ]
},
{ path: '**', redirectTo: 'movies' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    MovieModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
