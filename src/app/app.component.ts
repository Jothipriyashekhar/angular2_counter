import { Component, Input , OnInit } from '@angular/core';
import { IncrementComponent } from './increment.component';
import { DecrementComponent } from './decrement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
count : number = 0

  onIncrement() {
    this.count = this.count + 1;
  }
  onDecrement(){
    this.count = this.count - 1;
  }
  }
