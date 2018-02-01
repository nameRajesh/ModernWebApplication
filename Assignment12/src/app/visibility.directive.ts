import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {

  constructor() { }

  @HostBinding('style.display') display;
  @Input() visible: Boolean;

  ngOnInit() { // reached after all bound properties are initilized
    if(this.visible) {
      this.display = 'block';
    }else {
      this.display = 'none';
    }
  }

}
