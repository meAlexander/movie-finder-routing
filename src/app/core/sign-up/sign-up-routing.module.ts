import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../../app-routing.enum';
import { SignUpComponent } from './components/sign-up-form/sign-up.component';

const routes: Routes = [
  {
    path: Routing.EMPTY,
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
