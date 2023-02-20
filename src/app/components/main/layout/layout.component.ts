import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isOpenSidebar: boolean = false;
  private _router = inject(Router);

  navigate(path: string): void {
    this._router.navigate([path]);
  }

  changeSidebarState(): void {
    this.isOpenSidebar = !this.isOpenSidebar;
    console.log('alkfjjkshgjsd;gh;sdjgkl');
  }

  async getUsers(users: string[]) {
    const result = await Promise.all(
      users.map((user) =>
        fetch(`https://api.github.com/users/${user}`).then(
          (successResponse) => {
            if (successResponse.status != 200) {
              return null;
            } else {
              return successResponse.json();
            }
          },
          (failResponse) => {
            return null;
          }
        )
      )
    );
    console.log('result', result);
  }
}
