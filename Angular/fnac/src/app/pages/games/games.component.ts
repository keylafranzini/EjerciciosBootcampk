import { Component, OnInit } from '@angular/core';
import { games } from '../../../assets/mocks/games';
import { IGames } from '../../core/models/games.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {

  public games: IGames[];

  constructor() {
    this.games = games;
   }

  ngOnInit() {
  }

}
