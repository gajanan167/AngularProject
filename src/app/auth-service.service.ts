import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.length === 0) {
        console.log("null block");
        this.router.navigate(['/']);
        return false;
    }
    else {
      console.log("else block");
    return true;
    }
  }
}
