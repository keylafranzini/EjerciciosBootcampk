import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-items',
  templateUrl: './tab-items.component.html',
  styleUrls: ['./tab-items.component.sass']
})
export class TabItemsComponent{

  public opened: boolean = false;

  @Input() title: string = null;
  @Input() body: string = null;

  constructor() { 

  }

  clickOn(){
    this.opened = !this.opened;

  }

}
