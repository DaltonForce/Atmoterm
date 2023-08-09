import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDarkerColor]'
})
export class DarkerColorDirective {
  @Input() appDarkerColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appDarkerColor) {
      const darkerColor = this.calculateDarkerColor(this.appDarkerColor, 10);
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        darkerColor
      );
    }
  }

  private calculateDarkerColor(color: string, percent: number): string {
    const hex = color.replace(/#/, '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const darkerR = Math.round((r * (100 - percent)) / 100);
    const darkerG = Math.round((g * (100 - percent)) / 100);
    const darkerB = Math.round((b * (100 - percent)) / 100);

    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
  }
}
