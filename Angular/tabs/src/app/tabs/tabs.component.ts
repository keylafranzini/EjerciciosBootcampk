import { Component, OnInit, Input } from '@angular/core';
import { ITab } from '../core/interfaces/ITabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

  @Input() tabs: ITab[];



  constructor() { }

  ngOnInit() {
  }

  changeTab(){

  }

  goTo(){

  }
  
}
