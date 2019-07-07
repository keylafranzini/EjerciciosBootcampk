import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'creadorDeNoticias';

  anadirNoticia(noticia){
    console.log('ESTAMOS COLOCANDO UNA NOTICIA', noticia);
  }
}
