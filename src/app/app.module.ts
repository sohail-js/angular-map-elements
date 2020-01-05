import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementsMappingComponent } from './elements-mapping/elements-mapping.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsMappingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
