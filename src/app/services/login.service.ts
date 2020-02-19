import { ToastrService } from 'ngx-toastr';
import { LoginFormControlService } from './login-form-control.service';
import { Router } from '@angular/router';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token;
  private httpClient: HttpClient;


  constructor(private httpBackend: HttpBackend, private router: Router, private toastr: ToastrService) { }

  login(username, password) {
    console.log("login service is woring fine " + username, password);
    this.httpClient = new HttpClient(this.httpBackend);
    this.httpClient.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGHxWmT4_Ch93q_kUokx7D-w6mK6yUs1w",
      {
        "email": username,
        "password": password,
        "returnSecureToken": true
      }).subscribe(data => {
        console.log(data);
        this.token = data["idToken"];
        sessionStorage.currentUser = this.token;
        console.log("session Storage ", sessionStorage.getItem("currentUser"));
        console.log("this is below token");
        this.toastr.success('Login Successfull','Login',{
                   progressBar: true,
                   timeOut: 1000,
                   progressAnimation: 'increasing'

        });
        this.router.navigate(['/dashboard']);
      },
        error => {
          console.log(error);
          /* this.loginFormControlService.form.setErrors({
             invalidLogin: true
           });*/
          this.toastr.error('Invalid Username and Password');
        }
      );
  }
}
