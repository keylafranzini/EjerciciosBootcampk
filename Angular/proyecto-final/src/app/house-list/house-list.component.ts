import { Component, OnInit } from '@angular/core';
import { IHouse } from '../core/models/houses.interface';
import { HousesService } from '../core/services/houses.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.sass']
})
export class HouseListComponent implements OnInit {

  public houses: IHouse[] = [];

  constructor(private houses$: HousesService) {
  }

  ngOnInit() {
    this.houses$.getHouses().subscribe(houses => {
      this.houses = houses;
    });
  }

}
