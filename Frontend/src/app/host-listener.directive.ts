import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor( private el : ElementRef) { }

  @HostListener('click') myClick(){
  alert("welcome")
  this.el.nativeElement.style.backgroundColor = 'pink';

   
  }
  

}
