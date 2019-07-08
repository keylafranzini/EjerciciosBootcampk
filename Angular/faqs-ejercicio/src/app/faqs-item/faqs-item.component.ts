import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-faqs-item',
  templateUrl: './faqs-item.component.html',
  styleUrls: ['./faqs-item.component.sass']
})
export class FaqsItemComponent {
  // VARIABLES
  public opened: boolean = false;

  // Inputs
  @Input() title: string = "ERROR: Título";
  @Input() body: string = "ERROR: Body";

  // CONSTRUCTOR
  constructor() { }

  //METODOS PRIVADOS

  // METODOS PUBLICOS
  //VERSION LARGA
  //public changeState(){
    //if(this.opened == true){
     // this.opened = false;
    //} else {
     // this.opened = true;
    //}
    
  //VERSION CORTA
  public changeState(){
    this.opened = !this.opened;
  }
  

}



