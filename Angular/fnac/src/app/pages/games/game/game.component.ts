import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGames } from '../../../core/models/games.interface';
import { games } from '../../../../assets/mocks/games';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  public game: IGames;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id) {
        this.game = games[params.id];
      }
    });
  }

  ngOnInit() {
  }

}
