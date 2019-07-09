import { Component, OnInit, Input } from '@angular/core';
export interface Noticia { 
  title: string;
  body: string; 
}

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.sass']
})
export class NoticiaComponent implements OnInit {

  @Input() title : string = null;
  @Input() body : string = null;

  constructor() { }

  ngOnInit() {
  }

}
