import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';

import { Code } from '../../shared/models/code';
import { Movie } from '../../shared/models/movie';
import { Category } from '../../shared/models/category';
import { ResponseAPI } from '../../shared/models/response-api';
import { CategoryMovieMetadata } from '../../shared/constants/category-movie-metadata';
import { CATEGORY_MOVIES_METADATA } from '../../shared/constants/category-movies-metadata.const';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _categories$$: ReplaySubject<Category[]> = new ReplaySubject<Category[]>(1);

  public readonly categoryConfig: {
    [key in Code]: CategoryMovieMetadata;
  } = CATEGORY_MOVIES_METADATA;

  private readonly BASE_URL: string = 'https://api.themoviedb.org/3';

  private readonly API_KEY: string = '&api_key=fd2b31ba31547fa1ed49129738f2d156';
  private readonly API_KEY_ALT: string = '?api_key=fd2b31ba31547fa1ed49129738f2d156';

  constructor (private httpClient: HttpClient) { }

  get categories$$ (): Observable<Category[]> {
    return this._categories$$.asObservable();
  }

  setCategoriesSubject (categories: Category[]) {
    this._categories$$.next(categories);
  }

  public getCategoryMetadata (): CategoryMovieMetadata[] {
    const categoryMovieMetadata: CategoryMovieMetadata[] = [];
    of(
      this.categoryConfig.POPULAR_MOVIES,
      this.categoryConfig.THEATER_MOVIES,
      this.categoryConfig.KIDS_MOVIES,
      this.categoryConfig.TOP_RATED_MOVIES
    ).subscribe(categoryMetadata => {
      categoryMovieMetadata.push(categoryMetadata);
    });
    return categoryMovieMetadata;
  }

  public getMovieDetails (id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.BASE_URL + `/movie/${id}` + this.API_KEY_ALT);
  }

  public getMoviesBaseQuery (categoryMetadata: CategoryMovieMetadata, page: number = 1): Observable<Category> {
    let url: string;

    if (categoryMetadata.name === this.categoryConfig.SEARCHED_MOVIES.name) {
      const movieSearch: string = this.categoryConfig.SEARCHED_MOVIES.searchParam;
      url = '/search/movie' + this.API_KEY_ALT + `&query=${movieSearch}&page=${page}`;
    } else {
      url = categoryMetadata.categoryUrl + page + this.API_KEY;
    }

    return this.httpClient.get<ResponseAPI>(this.BASE_URL + url)
      .pipe(
        map((data: ResponseAPI) => {
          const category: Category = new Category();
          category.movies = data.results;
          category.totalPages = data.total_pages;
          category.totalResults = data.total_results;
          category.name = categoryMetadata.name;
          category.code = categoryMetadata.code;
          return category;
        }));
  }
}
