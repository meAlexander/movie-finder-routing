import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { HomePageComponent } from './home/components/home-component/home-page.component';
import { CategoryComponent } from './category/category.component';
import { MovieDetailsComponent } from './movie-details/components/movie-details/movie-details.component';
import { AllMoviesComponent } from './all-movies/components/all-movies/all-movies.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ExploreComponent } from './explore/explore.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MovieCardComponent,
    FooterComponent,
    CategoryComponent,
    MovieDetailsComponent,
    AllMoviesComponent,
    LoadingComponent,
    ExploreComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
