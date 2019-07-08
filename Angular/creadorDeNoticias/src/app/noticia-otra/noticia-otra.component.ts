import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia-otra',
  templateUrl: './noticia-otra.component.html',
  styleUrls: ['./noticia-otra.component.sass']
})
export class NoticiaOtraComponent implements OnInit {

  public _data = [];

  @Input() noticias: Array<any> = [];
  @Input() title : string = 'Cargando';
  @Input() body : string = 'Cargando';

  constructor() { }

  ngOnInit() {
  }

}
