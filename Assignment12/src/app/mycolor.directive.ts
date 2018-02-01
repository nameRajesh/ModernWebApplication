import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  private r: Renderer;
  private e: ElementRef;
  private color:Array<string> = ["red", "blue", "pink", "green", "purple", "cyan", "maroon", "orange", "yellow"];
  
  selectedColor: string;

  @Output() colorChange = new EventEmitter<string>();

  constructor(e: ElementRef, r: Renderer) { 
    this.r = r;
    this.e = e;
  }

  // To Listen to Events that are triggered by client
  @HostListener('click')
  changeColor(): void {
    this.selectedColor = this.color[Math.floor(Math.random() * this.color.length)];
    this.r.setElementStyle(this.e.nativeElement, 'color', this.selectedColor);
    this.colorChange.emit(this.selectedColor);
  }

}
