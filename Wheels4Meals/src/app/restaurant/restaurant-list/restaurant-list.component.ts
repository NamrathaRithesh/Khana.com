import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  // restaurants: any[];
  // filteredRestaurants: any[];
  // selectedId: number;
  // subscription: Subscription;

  restaurantlist : Restaurant[] = [];
  restaurantSubcription : Subscription;
  constructor(private restaurantService: RestaurantService) {
    // this.subscription = this.restaurantService.getRestaurants()
    //       .subscribe(restaurants => this.filteredRestaurants = this.restaurants = restaurants);
   }

  ngOnInit() {
    this.restaurantSubcription = this.restaurantService.restaurantObservable.subscribe(
      (data:Restaurant[]) => (this.restaurantlist=data)
    );
    this.restaurantService.getRestaurants();    
  }
  
  // filter(query: string){
  //   this.filteredRestaurants = (query) ?
  //     this.restaurants.filter(p => p.name.toLowerCase().includes(query.toLowerCase())):
  //       this.restaurants;
  //       console.log(this.filteredRestaurants);
  // }
}
