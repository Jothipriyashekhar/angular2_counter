import { Component , Output , Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'decrement-root',
  templateUrl: './decrement.component.html'
})
export class DecrementComponent {
  @Input() count;

  @Output() decrementValue = new EventEmitter();

 decrement(){
      this.decrementValue.emit();
  }
}
