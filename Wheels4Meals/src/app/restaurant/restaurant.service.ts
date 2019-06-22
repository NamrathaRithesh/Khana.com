import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import { Restaurant } from './restaurant';
import { RESTAURANT } from './mock-restaurant';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })

  export class RestaurantService {
    temp : Restaurant[];
    restaurantObservable: Subject<Restaurant[]> = new Subject<Restaurant[]>();
      constructor(){
        this.temp = RESTAURANT.slice();
      }

      getRestaurants() {
          // return of(RESTAURANT);
          this.restaurantObservable.next(this.temp);
      }

      getRestaurant(id: number | string) {
        this.getRestaurants();
        return this.restaurantObservable.pipe(
          // (+) before `id` turns the string into a number
          map((restaurants: Restaurant[]) => restaurants.find(restaurant => restaurant.id === +id))
        );
      }

      filterByRestaurantName(data){
        this.temp = RESTAURANT.slice().filter((res=>res.name.toLowerCase().includes(data.toLowerCase())));
        this.restaurantObservable.next(this.temp);
        console.log(this.temp)
        
    }

    sortBy(orderBy,isAsc){
      if(orderBy!=''){
          this.temp = this.temp.slice().sort((a,b) => this.compareTo(a,b,isAsc,orderBy));
          this.restaurantObservable.next(this.temp);
      }
    }
      compareTo(a:Restaurant,b:Restaurant,isAsc,orderBy):number{
        return(a[orderBy] > b[orderBy] ? 1 : -1)*(isAsc ? 1 : -1);
     }
  }

// public getRestaurants() {
//     return Observable.of(this.restaurantsData);
// }
// }

