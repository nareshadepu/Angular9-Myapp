import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "username", "email"];
  //dataSources: MatTableDataSource<PeriodicElement>;

  applyFilter(filtervalue: any) {
    this.dataSources.filter = filtervalue.trim().toLowerCase();
  }

  // applyFilter(filterValue: any) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSources.filter = filterValue;
  // }

  dataSources: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // this.dataSources = new MatTableDataSource();

    let resp = this.http.get("https://jsonplaceholder.typicode.com/users");
    resp.subscribe(data => (this.dataSources = data));

    // this.dataSources = new MatTableDataSource();
  }
}
