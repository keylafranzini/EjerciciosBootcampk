import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { FilmsComponent } from './pages/films/films.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { GamesComponent } from './pages/games/games.component';
import { FilmComponent } from './pages/films/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    FilmsComponent,
    DiscsComponent,
    GamesComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
