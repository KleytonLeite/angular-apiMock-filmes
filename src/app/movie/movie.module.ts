import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { FieldsModule } from '../shared/components/fields/fields.module';
import { MaterialModule } from '../shared/material/material.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRegisterComponent } from './movie-register/movie-register.component';



@NgModule({
  declarations: [ MovieListComponent, MovieRegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule,
    InfiniteScrollModule
  ]
})
export class MovieModule { }
