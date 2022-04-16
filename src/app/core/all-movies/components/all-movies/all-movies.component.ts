import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { ActivatedRoute } from '@angular/router';
import { CODE } from '../../../../shared/models/code';
import { NavigationService } from '../../../../services/navigation/navigation.service';
import { Routing } from '../../../../app-routing.enum';
import { CategoryMovieMetadata } from '../../../../shared/constants/category-movie-metadata';
import { MovieService } from '../../../../services/movie/movie.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  @Input() public page: number = 1;
  public category: Category;
  private code: CODE;
  private searchParam: string;

  constructor (
    private route: ActivatedRoute,
    private movieService: MovieService,
    private navigationService: NavigationService
  ) {}

  ngOnInit (): void {
    let code: CODE;
    let page: number;
    let name: string;
    let categoryMetadata: CategoryMovieMetadata;

    this.route.queryParams.pipe(
      map((queryParams) => {
        code = queryParams['code'];
        page = queryParams['page'];
        name = queryParams['name'];
        categoryMetadata = this.movieService.categoryConfig[code];
        if (name) {
          categoryMetadata.searchParam = name;
          this.searchParam = name;
        }
      }),
      switchMap(() => this.movieService.getMoviesBaseQuery(categoryMetadata, page))
    ).subscribe((category) => {
      this.category = category;
      this.code = category.code;
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
