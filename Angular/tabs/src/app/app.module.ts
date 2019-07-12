import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ButtonsComponent,
    ParagraphComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
