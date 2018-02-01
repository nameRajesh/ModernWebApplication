import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-array-comp [arr] = "this.arrStr"></app-array-comp>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrStr: Array<String>;

  constructor() {
    this.arrStr = ["Rajesh Subedi" , "CS572", "Modern Web Applications", "MUM"];
  }
}
