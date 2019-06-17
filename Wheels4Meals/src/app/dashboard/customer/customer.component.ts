import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //restaurants = RESTAURANTS;
  restaurants: any[];
  filteredRestaurants: any[];
  subscription: Subscription;
  
  key = 'name';
  reverse = false;

  constructor(private restaurantService: RestaurantService) {
    this.subscription = this.restaurantService.getRestaurants()
          .subscribe(restaurants => this.filteredRestaurants = this.restaurants = restaurants);
   }
  
  ngOnInit() {
  }

  filter(query: string){
    this.filteredRestaurants = (query) ?
      this.restaurants.filter(p => p.name.toLowerCase().includes(query.toLowerCase())):
        this.restaurants;
        console.log(this.filteredRestaurants);
  }

  sortList(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
