import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-comp',
  template: `<h1>Array of string as input and displaying as un-ordered list.</h1>
  <div>
    <ul>
      <li *ngFor="let str of arr"> {{str}} </li>
    </ul>
  </div>

  <h1>Custom directive "upper" used to convert elements to uppercase</h1>
  <div>
    <ul>
      <li *ngFor="let str of arr" appUpper> {{str}} </li>
    </ul>
  </div>

  <h1>Custom directive "visibility" used to show or hide contents</h1>
  <div>
    <ul appVisibility [visible] = "this.visible">
      <li *ngFor="let str of arr"> {{str}} </li>
    </ul>
  </div>

  <h1>Custom directive "mycolor" used to show color change from array of color</h1>
  
  <div>
    <ul>
      <li *ngFor="let str of arr" appMycolor (colorChange) = "colorChange($event)"> {{str}} </li>
    </ul>
  </div>
  {{changedColor}}
  `,
  styleUrls: ['./array-comp.component.css'],
  inputs: ['arr']
})
export class ArrayCompComponent implements OnInit {

 
  constructor() { }

  visible:Boolean = false;
  changedColor?: string;
  
  ngOnInit() {
  }


  colorChange(color: string) {
    this.changedColor = "selected color is " + color;
  }



}
