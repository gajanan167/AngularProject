import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  sourceData;


  constructor(private httpClient: HttpClient, private router: Router) {

    this.httpClient.get("https://angularapp-7b740.firebaseio.com/.json").subscribe(data => {
      console.log(data);
      this.sourceData = data;
      this.dataSource = new MatTableDataSource(this.sourceData);
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }
  logout() {
    console.log("its working");
    sessionStorage.clear();
    console.log(sessionStorage);
    this.router.navigate(['/']);
  }
}
