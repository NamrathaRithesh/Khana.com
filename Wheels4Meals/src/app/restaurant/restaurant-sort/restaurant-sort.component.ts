import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SORT } from '../mock-restaurant';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-sort',
  templateUrl: './restaurant-sort.component.html',
  styleUrls: ['./restaurant-sort.component.css']
})
export class RestaurantSortComponent implements OnInit {
  sortBy=new FormControl();
  asc = true ;
  sortList = SORT;
  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
  }

  sort() {
    this.asc = !this.asc;
    this.restaurantService.sortBy(this.sortBy.value, this.asc );
  }

}
