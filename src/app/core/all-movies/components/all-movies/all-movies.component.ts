import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { Code } from '../../../../shared/models/code';
import { Routing } from '../../../../app-routing.enum';
import { Category } from '../../../../shared/models/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryMovieMetadata } from '../../../../shared/constants/category-movie-metadata';
import { MovieService } from '../../../../services/movie/movie.service';
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  public category: Category;
  public page: number;
  private code: Code;
  private searchParam: string;

  constructor (
    private route: ActivatedRoute,
    private movieService: MovieService,
    private navigationService: NavigationService
  ) { }

  ngOnInit (): void {
    let categoryMetadata: CategoryMovieMetadata;

    this.route.queryParams.pipe(
      map((queryParams) => {
        this.searchParam = queryParams['name'];
        this.code = queryParams['code'];
        this.page = queryParams['page'];

        categoryMetadata = this.movieService.categoryConfig[this.code];
        categoryMetadata.searchParam = this.searchParam;
      }),
      switchMap(() => this.movieService.getMoviesBaseQuery(categoryMetadata, this.page))
    ).subscribe((category) => {
      this.category = category;
    });
  }

  public showPage (page: number): void {
    this.page = page;
    this.navigationService.navigate([Routing.CATEGORY], { code: this.code, name: this.searchParam, page: this.page });
  }

  public backToHome (): void {
    this.navigationService.navigate([Routing.HOME]);
  }
}
