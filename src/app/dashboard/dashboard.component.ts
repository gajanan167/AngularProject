import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Angular Example';
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age'];
  dataSource;


  constructor(private httpClient: HttpClient, private router: Router) {

    this.httpClient.get( "assets/data.json" ).subscribe(data =>{
      console.log(data);
     this.dataSource = data;
   });
  }
  ngOnInit(){
  }
  logout() {
       console.log("its working");
       this.router.navigate(['/']);
  }
}
