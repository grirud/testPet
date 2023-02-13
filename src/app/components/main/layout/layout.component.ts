import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor( private _router: Router ) {}
  navigate(path: string): void {
    this._router.navigate([path])
  }

async getUsers(users: string[]) {
  const result = await Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`).then(
    successResponse => {
      if (successResponse.status != 200) {
        return null;
      } else {
        return successResponse.json();
      }
    },
    failResponse => {
      return null;
      })
    )
  )
  
  console.log('result', result)
}

}
