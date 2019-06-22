import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  
  key = 'name';
  reverse = false;

  constructor(){} 
  
  ngOnInit() {
  }

  sortList(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
