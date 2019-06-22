import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {
  // key = 'name';
  // reverse = false;
  restaurantName = new FormControl();
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  search() {
    console.log("bndbgjdn");
     this.restaurantService.filterByRestaurantName(this.restaurantName.value);
  }

  // sortList(key) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }
}
