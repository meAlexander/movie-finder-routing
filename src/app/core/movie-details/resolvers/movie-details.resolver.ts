import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../shared/models/movie';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<Movie> {
  constructor (
    private movieService: MovieService
  ) { }

  resolve (route: ActivatedRouteSnapshot): Observable<Movie> {
    const movieId: number = route.queryParams['id'];
    return this.movieService.getMovieDetails(movieId);
  }
}
