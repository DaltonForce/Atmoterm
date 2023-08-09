import { Component, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() data: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  applyFilterIfNeeded() {
    if (this.data.textcolor === '#000') {
      const image = this.el.nativeElement.querySelector('img');
      this.renderer.setStyle(
        image,
        'filter',
        'invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg)'
      );
    }
  }
}
