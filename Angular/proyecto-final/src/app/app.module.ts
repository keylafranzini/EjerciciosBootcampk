import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './characters-list/character/character.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house-list/house/house.component';
import { CharactersService } from './core/services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { HousesService } from './core/services/houses.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    CharactersListComponent,
    CharacterComponent,
    HouseListComponent,
    HouseComponent,
    CharacterDetailComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CharactersService,
    HousesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
