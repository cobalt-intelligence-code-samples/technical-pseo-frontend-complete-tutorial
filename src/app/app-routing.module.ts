import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state/state.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';

const routes: Routes = [
  {
    path: 'state/:state',
    component: StateComponent
  },
  {
    path: 'state/:state/zipcode/:zipcode',
    component: ZipcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
