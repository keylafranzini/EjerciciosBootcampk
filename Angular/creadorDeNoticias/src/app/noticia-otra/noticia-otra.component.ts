import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-otra',
  templateUrl: './noticia-otra.component.html',
  styleUrls: ['./noticia-otra.component.sass']
})
export class NoticiaOtraComponent implements OnInit {

  public noticias: Noticia[] = [];

  constructor() { }

  ngOnInit() {
  }

  anadirNoticia(noticia: Noticia){
    this.noticias.push(noticia);
  }
}

interface Noticia {
  title: string;
  body: string;
}