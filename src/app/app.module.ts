import { InterceptorService } from './services/interceptor.service';
import { LoginFormControlService } from './services/login-form-control.service';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './auth-service.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 1500,
      positionClass: 'toast-top-center'
    }),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginFormComponent },
      { path: 'dashboard',
        component: DashboardComponent,
        canActivate : [ AuthServiceService ]
      },
      { path: '**', redirectTo : "login" , pathMatch: "full" }
    ])
  ],
  providers: [AuthServiceService, LoginService, LoginFormControlService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
