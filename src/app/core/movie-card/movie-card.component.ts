import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../../shared/models/movie';
import { Routing } from '../../app-routing.enum';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: Movie;

  public imageUrl: string;
  public loadImage: boolean = true;

  constructor (
    private navigationService: NavigationService
  ) { }

  ngOnInit (): void {
    this.imageUrl = 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path;
  }

  public clickViewMovieDetails (): void {
    this.navigationService.navigate([Routing.MOVIE_DETAILS], { id: this.movie.id });
  }

  public loadingImage (): void {
    this.loadImage = false;
  }
}
