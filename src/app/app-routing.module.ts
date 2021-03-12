import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieRegisterComponent } from './movie/movie-register/movie-register.component';
import { MovieViewComponent } from './movie/movie-view/movie-view.component';
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
      children: [
        {
          path: '',
          component: MovieRegisterComponent,
          pathMatch: 'full'
        },
        {
          path: ':id',
          component: MovieRegisterComponent,
          pathMatch: 'full'
        },
      ]
    },
    {
      path: ':id',
      component: MovieViewComponent,
    },
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
