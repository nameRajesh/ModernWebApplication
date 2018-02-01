import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
    r.setElementStyle(e.nativeElement, 'text-transform', 'uppercase')
  }

}
