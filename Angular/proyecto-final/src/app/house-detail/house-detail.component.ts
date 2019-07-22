import { Component, OnInit } from '@angular/core';
import { HousesService } from '../core/services/houses.service';
import { ActivatedRoute } from '@angular/router';
import { IHouseDetail } from '../core/models/houses.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.sass']
})

export class HouseDetailComponent implements OnInit {

  public houseName: string = null;
  public house: IHouseDetail = null;

  constructor(private route: ActivatedRoute, private houses$: HousesService, private _location: Location) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.housename) {
        this.houseName = params.housename;
        this.houses$.getHousesDetail(this.houseName).subscribe(house => {
          this.house = house[0];
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
