import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../../services/navigation/navigation.service';
import { Routing } from '../../../../app-routing.enum';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie;
  public imageUrl: string;

  constructor (
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) { }

  ngOnInit () {
    this.movie = this.route.snapshot.data['singleMovie'];
    this.imageUrl = 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path;
  }

  public back (): void {
    this.navigationService.navigate([Routing.HOME]);
  }
}
