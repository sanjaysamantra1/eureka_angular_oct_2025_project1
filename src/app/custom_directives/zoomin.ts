import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomin]'
})
export class Zoomin {
  // ele = new ElementRef(); dont use this approach to create object (manual)

  // creating object of ElementRef class
  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(ele);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,110%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }

}
