import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.sass']
})
export class NoticiaComponent implements OnInit {

  @Input() title : string = 'Cargando';
  @Input() body : string = 'Cargando';

  constructor() { }

  ngOnInit() {
  }

}
