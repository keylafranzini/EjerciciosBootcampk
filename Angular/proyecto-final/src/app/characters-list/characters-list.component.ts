import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../core/models/characters.interface';
import { CharactersService } from '../core/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass']
})
export class CharactersListComponent implements OnInit {

  public characters: ICharacter[] = [];


  constructor( private characters$: CharactersService) { 

  }

  ngOnInit() {
    this.characters$.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

}
