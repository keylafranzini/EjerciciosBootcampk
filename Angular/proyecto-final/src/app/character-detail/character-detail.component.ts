import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../core/services/characters.service';
import { ICharacterDetail } from '../core/models/characters.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass']
})

export class CharacterDetailComponent implements OnInit {

  public characterName: string = null;
  public character: ICharacterDetail = null;

  constructor(private route: ActivatedRoute, private characters$: CharactersService, private _location: Location) {


    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.charactername) {
        this.characterName = params.charactername;
        this.characters$.getCharactersDetail(this.characterName).subscribe(character => {
          this.character = character;
        });
      }
    });
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
