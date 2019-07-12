import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { DiscComponent } from './pages/discs/disc/disc.component';
import { GamesComponent } from './pages/games/games.component';
import { FilmComponent } from './pages/films/film/film.component';
import { GameComponent } from './pages/games/game/game.component';

const routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'films', component: FilmsComponent
  },
  {
    path: 'films/:id', component: FilmComponent
  },
  {
    path: 'discs', component: DiscsComponent
  },
  {
    path: 'disc/:id', component: DiscComponent
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'game/:id', component: GameComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
