import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaOtraComponent } from './noticia-otra/noticia-otra.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNoticiaComponent,
    NoticiaComponent,
    NoticiaOtraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
