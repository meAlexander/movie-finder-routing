import { Component } from '@angular/core';

import { Routing } from '../../../app-routing.enum';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor (
    private navigationService: NavigationService
  ) { }

  public backToHome (): void {
    this.navigationService.navigate([Routing.HOME]);
  }

  goToSignUp (): void {
    this.navigationService.navigate([Routing.SIGN_UP]);
  }
}
