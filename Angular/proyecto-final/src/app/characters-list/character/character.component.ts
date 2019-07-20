import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/app/core/models/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {

  @Input() character: ICharacter = null;

  constructor() { }

  ngOnInit() {
  }

}
