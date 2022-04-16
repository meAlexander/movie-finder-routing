import { Component, OnInit } from '@angular/core';

import { Routing } from '../../app-routing.enum';
import { CategoryMovieMetadata } from '../../shared/constants/category-movie-metadata';
import { MovieService } from '../../services/movie/movie.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  public categoryMovieMetadata: CategoryMovieMetadata[];

  constructor (
    public movieService: MovieService,
    private navigationService: NavigationService
  ) { }

  ngOnInit (): void {
    this.categoryMovieMetadata = this.movieService.getCategoryMetadata();
  }

  public showCategory (categoryMetadata: CategoryMovieMetadata): void {
    this.navigationService.navigate([Routing.CATEGORY], { code: categoryMetadata.code, page: 1 });
  }
}
