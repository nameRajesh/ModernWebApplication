import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<app-counter [counter] = "this.counterValue" (counterChange) = "counterChange($event)"></app-counter>
  
  <input type="number" (keyup)="onKey($event.target.value)"/><br/>
  {{componentCounterValue}}
`,
  styles: []
})
export class AppComponent {
  title = 'app';

  componentCounterValue?:string;
  counterValue:number = 1;

  counterChange(counter: number) {
    this.componentCounterValue = "Component Counter Value = " + counter;
  }

  onKey(data) { 
    let intVal = parseInt(data);
    if(isNaN(intVal)) return false;
    else this.counterValue = intVal;
  }

}
