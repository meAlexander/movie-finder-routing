import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../../../services/movie/movie.service';
import { Movie } from '../../../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<Movie> {
  constructor (private movieService: MovieService) {}

  resolve (route: ActivatedRouteSnapshot): Observable<Movie> {
    const movieId: number = route.queryParams['id'];
    return this.movieService.getMovieDetails(movieId);
  }
}
