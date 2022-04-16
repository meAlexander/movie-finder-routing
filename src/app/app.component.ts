import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation/navigation.service';
import { Routing } from './app-routing.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private navigationService: NavigationService) { }

  ngOnInit (): void {
    this.navigationService.navigate([Routing.HOME]);
  }
}
