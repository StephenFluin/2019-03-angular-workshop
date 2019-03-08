import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
dealList;
  constructor(public http: HttpClient) {
    this.dealList = http.get('/assets/deals.json');
   }

  ngOnInit() {
  }

}
