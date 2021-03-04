import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoveListComponent } from './move/move-list/move-list.component';
import { MoveRegisterComponent } from './move/move-register/move-register.component';
import { MoveModule } from './move/move.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'moves',
    pathMatch: 'full'
},
{
  path: 'moves',
  children: [
    {
      path: '',
      component: MoveListComponent,
    },
    {
      path: 'register',
      component: MoveRegisterComponent,
      pathMatch: 'full'
    }
  ]
},
{ path: '**', redirectTo: 'moves' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    MoveModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
