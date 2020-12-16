import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SampleComponent }  from './sample.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SampleComponent ],
  bootstrap:    [ AppComponent, SampleComponent ]
})
export class AppModule { }
