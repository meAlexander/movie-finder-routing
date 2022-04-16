import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Code } from '../../shared/models/code';
import { Routing } from '../../app-routing.enum';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  constructor (
    private navigationService: NavigationService
  ) { }

  public searchMovie (searchForm: NgForm): void {
    const movieSearch: string = searchForm.value.movie;
    this.navigationService.navigate([Routing.CATEGORY], { code: Code.SEARCHED_MOVIES, name: movieSearch, page: 1 });
  }
}
