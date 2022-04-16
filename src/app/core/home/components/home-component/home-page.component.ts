import { Component, OnInit } from '@angular/core';

import { Category } from '../../../../shared/models/category';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../../services/movie/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public allCategories: Category[];

  constructor (
    private router: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit (): void {
    this.allCategories = this.router.snapshot.data['categories'];
    this.movieService.setCategoriesSubject(this.allCategories);
  }
}
