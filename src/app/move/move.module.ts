import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FieldsModule } from '../shared/components/fields/fields.module';
import { MaterialModule } from '../shared/material/material.module';
import { MoveListComponent } from './move-list/move-list.component';
import { MoveRegisterComponent } from './move-register/move-register.component';



@NgModule({
  declarations: [ MoveListComponent, MoveRegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule
  ]
})
export class MoveModule { }
