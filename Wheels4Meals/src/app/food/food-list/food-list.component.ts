import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food-service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  // food$: Observable<Food[]>;
  foods$:Observable<Food[]>;
  selectedId: number;
  food;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: FoodService) { }

  ngOnInit() {
    this.foods$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getFoods(this.selectedId);
      })
    );
    this.foods$.forEach((food:Food[]) => {this.food=food})
  }

  
  searchCategory(category){
    this.foods$ = this.service.getCategoryFood(category);
  }

  addToCart(food1:Food){
    this.service.addToCart(food1);
  }

}
