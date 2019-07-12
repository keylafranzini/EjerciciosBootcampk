import { Component, OnInit } from '@angular/core';
import { discs } from '../../../../assets/mocks/discs';
import { IDisc } from '../../../core/models/discs.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.sass']
})
export class DiscComponent implements OnInit {

  public disc: IDisc;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id) {
        this.disc = discs[params.id];
      }
    });
  }

  ngOnInit() {
  }

}
