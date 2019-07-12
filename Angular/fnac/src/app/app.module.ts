import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { GamesComponent } from './pages/games/games.component';
import { FilmComponent } from './pages/films/film/film.component';
import { DiscComponent } from './pages/discs/disc/disc.component';
import { GameComponent } from './pages/games/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    DiscsComponent,
    GamesComponent,
    FilmComponent,
    DiscComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
