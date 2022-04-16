import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './core/shared/navbar/navbar.component';
import { FooterComponent } from './core/shared/footer/footer.component';

import { MovieCardComponent } from './core/movie-card/movie-card.component';
import { HomePageComponent } from './core/home/components/home-component/home-page.component';
import { CategoryComponent } from './core/category/category.component';
import { MovieDetailsComponent } from './core/movie-details/components/movie-details/movie-details.component';
import { AllMoviesComponent } from './core/all-movies/components/all-movies/all-movies.component';
import { LoadingComponent } from './core/shared/loading/loading.component';
import { ExploreComponent } from './core/explore/explore.component';
import { SearchBoxComponent } from './core/search-box/search-box.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }