import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderHeight]'
})
export class HeaderHeightDirective implements AfterViewInit {
  constructor( private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const headerHeight = this.el.nativeElement.offsetHeight;
    const panelElement = this.el.nativeElement.closest('.container').querySelector('.app-panel');

    if (panelElement) {
      const newHeight = `calc(100vh - ${headerHeight}px)`;
      this.renderer.setStyle(panelElement, 'height', newHeight);
    }
  }
}
