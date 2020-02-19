import { LoginFormControlService } from './../services/login-form-control.service';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username;
  password;
  form;

  constructor(private loginServie: LoginService, private loginFormConService: LoginFormControlService) {}

  ngOnInit() {
    this.username = this.loginFormConService.username;
    this.password = this.loginFormConService.password;
    this.form = this.loginFormConService.form;
  }

  onSubmit() {
    this.loginServie.login(this.loginFormConService.form.value.username, this.loginFormConService.form.value.password);

  }
}
