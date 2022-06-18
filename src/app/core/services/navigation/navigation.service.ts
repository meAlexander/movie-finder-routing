import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor (
    private router: Router
  ) { }

  public navigate (path: string[], queryParams: Params | null = null, relativeTo: ActivatedRoute | null = null): void  {
    this.router.navigate(path, { queryParams, relativeTo });
  }
}
