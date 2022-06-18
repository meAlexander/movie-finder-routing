import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Routing } from './app-routing.enum';
import { AllMoviesComponent } from './all-movies/components/all-movies/all-movies.component';
import { HomePageResolver } from './home/resolvers/home-page.resolver';
import { MovieDetailsResolver } from './movie-details/resolvers/movie-details.resolver';

const routes: Routes = [
  {
    path: Routing.EMPTY,
    children: [
      {
        path: Routing.HOME, pathMatch: 'full',
        resolve: { categories: HomePageResolver },
        loadChildren: () => import('./home/home-page.module')
          .then(module => module.HomePageModule)
      },
      {
        path: Routing.MOVIE_DETAILS,
        resolve: { singleMovie: MovieDetailsResolver },
        loadChildren: () => import('./movie-details/movie-details.module')
          .then(module => module.MovieDetailsModule)
      },
      {
        path: Routing.SIGN_UP,
        loadChildren: () => import('./sign-up/sign-up.module').
          then(module => module.SignUpModule)
      },
      {
        path: Routing.CATEGORY,
        component: AllMoviesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
