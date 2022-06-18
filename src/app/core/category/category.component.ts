import { Component, Input } from '@angular/core';

import { Routing } from '../app-routing.enum';
import { Category } from '../shared/models/category';
import { NavigationService } from '../services/navigation/navigation.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() public category: Category;

  constructor (
    private navigationService: NavigationService
  ) { }

  public showCategoryMoviesPage (): void {
    this.navigationService.navigate([Routing.CATEGORY], { code: this.category.code, page: 1 });
  }
}
