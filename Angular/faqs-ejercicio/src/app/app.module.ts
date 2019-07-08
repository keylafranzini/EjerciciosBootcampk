import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqsListComponent } from './faqs-list/faqs-list.component';
import { FaqsItemComponent } from './faqs-item/faqs-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqsListComponent,
    FaqsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
