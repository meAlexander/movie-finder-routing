import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Category } from '../../../shared/models/category';
import { CategoryMovieMetadata } from '../../../shared/constants/category-movie-metadata';
import { MovieService } from '../../../services/movie/movie.service';
import { CODE } from '../../../shared/models/code';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesResolver implements Resolve<Category> {
  constructor (private movieService: MovieService, private route1: ActivatedRoute) {}

  resolve (route: ActivatedRouteSnapshot): Observable<Category> {
    const code: CODE = route.queryParams['code'];
    const page: number = route.queryParams['page'];
    const name: string = route.queryParams['name'];

    const categoryMetadata: CategoryMovieMetadata = this.movieService.categoryConfig[code];
    if (name) {
      categoryMetadata.searchParam = name;
    }
    return this.movieService.getMoviesBaseQuery(categoryMetadata, page);
    //
    // let code: CODE;
    // let page: number;
    // let name: string;
    // let categoryMetadata: CategoryMovieMetadata;
    // return this.route1.queryParams.pipe(
    //   tap((params) => console.log(params)),
    //   map(queryParams => {
    //     code = queryParams['code'];
    //     page = queryParams['page'];
    //     name = queryParams['name'];
    //
    //     categoryMetadata = this.movieService.categoryConfig[code];
    //     if (name) {
    //       categoryMetadata.searchParam = name;
    //     }
    //   }),
    //   switchMap(() => this.movieService.getMoviesBaseQuery(categoryMetadata, page))
    // );
  }
}
