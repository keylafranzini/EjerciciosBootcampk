import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './characters-list/character/character.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house-list/house/house.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters-list', component: CharactersListComponent
  },
  {
    path: 'character/:id', component: CharacterComponent
  },
  {
    path: 'house-list', component: HouseListComponent
  },
  {
    path: 'house/:id', component: HouseComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
