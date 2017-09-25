import { Component , Output , Input , EventEmitter} from '@angular/core';

@Component({
  selector: 'increment-root',
  templateUrl: './increment.component.html'
})
export class IncrementComponent {
  @Input() count;

  @Output() incrementValue = new EventEmitter();

 increment(){
  this.incrementValue.emit();
  }
}
