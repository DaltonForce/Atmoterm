import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  menuItems: string[] = ['E-Usługi'];
  activeMenuItem: string | null = null;

  selectMenuItem(menuItem: string): void {
    this.activeMenuItem = menuItem;
  }
}
