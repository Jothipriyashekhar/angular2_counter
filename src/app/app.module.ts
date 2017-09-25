import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { IncrementComponent } from './increment.component';
import { DecrementComponent } from './decrement.component';


@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
