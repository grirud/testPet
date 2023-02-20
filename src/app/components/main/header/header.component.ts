import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isOpen: boolean = false;
  @Output() isOpenSidebarOutput: EventEmitter<void> = new EventEmitter<void>();

  toggleTheme(ev: any) {}

  openSideMenu() {
    this.isOpenSidebarOutput.emit();
    this.isOpen = !this.isOpen;
  }
  onClickShowSidebar() {}
}
