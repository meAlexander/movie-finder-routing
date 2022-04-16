import { Component, OnInit } from '@angular/core';

import { Routing } from './app-routing.enum';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private navigationService: NavigationService
  ) { }

  ngOnInit (): void {
    this.navigationService.navigate([Routing.HOME]);
  }
}
