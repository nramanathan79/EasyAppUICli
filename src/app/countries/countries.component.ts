import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  dataTableServiceName: string = "countries";
  
  constructor() { }

  ngOnInit() {
  }
}
