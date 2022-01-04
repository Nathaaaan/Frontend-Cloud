import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SensitivitycompComponent } from './sensitivitycomp/sensitivitycomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SensitivitycompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
