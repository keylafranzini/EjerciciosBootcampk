import { Component, OnInit } from '@angular/core';
import { discs } from '../../../assets/mocks/discs';
import { IDisc } from '../../core/models/discs.interface';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.sass']
})
export class DiscsComponent implements OnInit {

  public discs: IDisc[];

  constructor() {
    this.discs = discs;
   }

  ngOnInit() {
  }

}
