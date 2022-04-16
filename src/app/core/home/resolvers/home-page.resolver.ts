import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { MovieService } from '../../../services/movie/movie.service';
import { Category } from '../../../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<Category[]> {
  constructor (
    private movieService: MovieService
  ) { }

  resolve (): Observable<Category[]> {
    let categories: Category[];
    this.movieService.categories$$.subscribe((data) => {
      categories = data;
    });

    if (categories) {
      return of(categories);
    }

    return forkJoin([
      this.movieService.getMoviesBaseQuery(this.movieService.categoryConfig['POPULAR_MOVIES']),
      this.movieService.getMoviesBaseQuery(this.movieService.categoryConfig['THEATER_MOVIES']),
      this.movieService.getMoviesBaseQuery(this.movieService.categoryConfig['KIDS_MOVIES']),
      this.movieService.getMoviesBaseQuery(this.movieService.categoryConfig['TOP_RATED_MOVIES']),
    ]);
  }
}
