import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent{
  /* public buttonTitle: string = "Aceptar"; */
  @Input() buttonTitle: string = "SIN TITULO";
  @Output() clickUser: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  public responderClick() {
   /*  alert("Pulsado botón " + this.buttonTitle); */
   let clickDate: Date = new Date();
   this.clickUser.next(clickDate);
  }

}
