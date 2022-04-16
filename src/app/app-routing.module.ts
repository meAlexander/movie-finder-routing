import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from './app-routing.enum';
import { AppComponent } from './app.component';
import { MovieDetailsResolver } from './core/movie-details/resolvers/movie-details.resolver';
import { HomePageResolver } from './core/home/resolvers/home-page.resolver';
import { AllMoviesComponent } from './core/all-movies/components/all-movies/all-movies.component';
import { AllMoviesResolver } from './core/all-movies/resolvers/all-movies.resolver';

const routes: Routes = [
  {
    path: Routing.EMPTY,
    component: AppComponent,
    children: [
      {
        path: Routing.HOME,
        resolve: { categories: HomePageResolver },
        loadChildren: () => import('./core/home/home-page.module')
          .then(module => module.HomePageModule)
      },
      {
        path: Routing.MOVIE_DETAILS,
        resolve: { singleMovie: MovieDetailsResolver },
        loadChildren: () => import('./core/movie-details/movie-details.module')
          .then(module => module.MovieDetailsModule)
      },
      {
        path: Routing.CATEGORY,
        // resolve: { category: AllMoviesResolver },
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
