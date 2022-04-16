import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie/movie.service';
import { CategoryMovieMetadata } from '../../shared/constants/category-movie-metadata';
import { Routing } from '../../app-routing.enum';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  public categoryMovieMetadata: CategoryMovieMetadata[];

  constructor (public movieService: MovieService, private navigationService: NavigationService) { }

  ngOnInit () {
    this.categoryMovieMetadata = this.movieService.getCategoryMetadata();
  }

  public showCategory (categoryMetadata: CategoryMovieMetadata): void {
    this.navigationService.navigate([Routing.CATEGORY], { code: categoryMetadata.code });
  }
}
