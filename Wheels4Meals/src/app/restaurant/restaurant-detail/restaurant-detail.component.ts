import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant$: Observable<Restaurant>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RestaurantService
  ) { }

  ngOnInit() {
    this.restaurant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRestaurant(params.get('id')))
    );
  }

}
