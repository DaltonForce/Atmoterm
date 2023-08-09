import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFooterHeight]'
})
export class FooterHeightDirective implements AfterViewInit {

  constructor( private el: ElementRef, private renderer: Renderer2 ) { }


  ngAfterViewInit(): void {
    const innerHeight = this.el.nativeElement.querySelector('.inner').clientHeight;
    const copyrightHeight = this.el.nativeElement.querySelector('.copyright').clientHeight;
    const footer = this.el.nativeElement.querySelector('.container');
    const totalHeight = innerHeight + copyrightHeight;

    this.renderer.setStyle(footer, 'min-height', totalHeight + 'px');
  }

}
