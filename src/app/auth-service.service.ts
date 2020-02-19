import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) { }

  canActivate(): boolean {
    if (sessionStorage.length === 0) {
      console.log("null block");
      this.toastr.warning('Login Required');
      this.router.navigate(['/']);
      return false;
    }
    else {
      console.log("else block");
      return true;
    }
  }
}
