import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsHeaderComponent } from './tabs-header/tabs-header.component';
import { TabItemsComponent } from './tab-items/tab-items.component';
import { TabArrowComponent } from './tab-arrow/tab-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsHeaderComponent,
    TabItemsComponent,
    TabArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
