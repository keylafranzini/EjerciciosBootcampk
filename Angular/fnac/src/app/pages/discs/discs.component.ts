import { Component, OnInit } from '@angular/core';
import { discs } from '../../../assets/mocks/discs';
import { IDiscs } from '../../core/models/discs.interface';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.sass']
})
export class DiscsComponent implements OnInit {

  public discs: IDiscs[];

  constructor() {
    this.discs = discs;
   }

  ngOnInit() {
  }

}
