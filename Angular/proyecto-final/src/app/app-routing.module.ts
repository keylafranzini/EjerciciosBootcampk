import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './characters-list/character/character.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house-list/house/house.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters-list', component: CharactersListComponent
  },
  {
    path: 'character', component: CharacterComponent
  },
  {
    path: 'character-detail/:charactername', component: CharacterDetailComponent
  },
  {
    path: 'house-list', component: HouseListComponent
  },
  {
    path: 'house', component: HouseComponent
  },
  {
    path: 'house-detail/:housename', component: HouseDetailComponent
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
