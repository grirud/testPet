import { Component } from '@angular/core';
import { MENU_ITEMS } from './sidebar-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public menuItems = MENU_ITEMS
}
