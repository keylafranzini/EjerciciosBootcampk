import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from '../../../../assets/mocks/films';
import { IFilm } from '../../../../assets/mocks/films';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent implements OnInit {

  public film: IFilm[];

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id){
        this.film = films[params.id];
      }
    });
  }

  ngOnInit() {
  }

}
