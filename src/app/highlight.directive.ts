import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: string;

  @HostListener('mouseenter')
  onMouseEnter(){
    this._el.nativeElement.style.backgroundColor = this.appHighlight ? this.appHighlight : 'yellow';
  } 

  @HostListener('mouseleave') 
  onMouseLeave(){
    this._el.nativeElement.style.backgroundColor = null;
  }

  constructor(private _el: ElementRef) {
  }
}
