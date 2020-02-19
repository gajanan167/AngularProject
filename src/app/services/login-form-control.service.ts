import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormControlService {

  constructor() {}
  form = new FormGroup({
  username: new FormControl('', Validators.required),
   password: new FormControl('', Validators.required)

});
get username() {
  return this.form.get('username');
}
get password() {
return this.form.get('password');
}
}
