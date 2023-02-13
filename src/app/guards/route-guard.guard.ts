import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
    private _token: string | null
    
    constructor(
        private _router: Router
    ) { this._token = localStorage.getItem('token') }
    
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(!this._token && state.url === '/dashboard') {
            this._router.navigate(['/login'])
        }

        if(this._token && state.url === '/login') {
            this._router.navigate(['/dashboard'])
        }

        return true
    }
}