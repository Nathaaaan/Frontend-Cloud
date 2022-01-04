import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SensitivitycompComponent } from './sensitivitycomp/sensitivitycomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SensitivitycompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
