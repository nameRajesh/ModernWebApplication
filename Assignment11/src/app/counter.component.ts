import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter:</h1>
  <p><button (click) = "decrease()">-</button>
  {{counter}}
  <button (click) = "increase()">+</button> </p>
`,
  styles: []
})
export class CounterComponent {

  @Input() counter:number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
    this.counter = 1;
  }

  increase() {
    this.counter = this.counter + 1;
    this.counterChange.emit(this.counter);
    return false;
  }
  decrease() {
    this.counter= this.counter - 1;
    this.counterChange.emit(this.counter);
    return false;
  }

}
