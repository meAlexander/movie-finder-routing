import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../app-routing.enum';
import { HomePageComponent } from './components/home-component/home-page.component';

const routes: Routes = [
  {
    path: Routing.EMPTY,
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
