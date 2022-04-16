import { Component, Input } from '@angular/core';
import { Category } from '../../shared/models/category';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Routing } from '../../app-routing.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor (
    private navigationService: NavigationService
  ) {}

  @Input() public category: Category;

  public showCategoryMoviesPage (): void {
    this.navigationService.navigate([Routing.CATEGORY], { code: this.category.code, page: 1 });
  }
}
