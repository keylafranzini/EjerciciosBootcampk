import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia-otra',
  templateUrl: './noticia-otra.component.html',
  styleUrls: ['./noticia-otra.component.sass']
})
export class NoticiaOtraComponent implements OnInit {

  public _data: Noticia[] = []

  constructor() { }

  ngOnInit() {
  }

}

interface Noticia {
  title: string;
  body: string;
}