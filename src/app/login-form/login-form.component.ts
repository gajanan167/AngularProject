
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  constructor(private router: Router ){}
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
 onSubmit() {
   console.log("Its working");
   console.log(this.form.value.username);
   if (this.form.value.username === "gajanan" && this.form.value.password === "12345")
   {
     console.log("login");
     this.router.navigate(['/dashboard']);
   }
   else {
        this.form.setErrors({
          invalidLogin : true
        })
   }
 }
}
