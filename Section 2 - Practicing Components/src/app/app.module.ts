import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YellowComponent } from './yellow/yellow.component'
import { PurpleComponent } from './purple/purple.component'
import { CyanComponent } from './cyan/cyan.component'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    YellowComponent,
    CyanComponent,
    PurpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
