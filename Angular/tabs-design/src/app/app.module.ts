import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsHeaderComponent } from './tabs-header/tabs-header.component';
import { TabItemsComponent } from './tab-items/tab-items.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsHeaderComponent,
    TabItemsComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
