import { Component, OnInit, Input } from '@angular/core';
import { IHouse } from 'src/app/core/models/houses.interface';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {

  @Input() house: IHouse = null;

  constructor() { }

  ngOnInit() {
  }

}
