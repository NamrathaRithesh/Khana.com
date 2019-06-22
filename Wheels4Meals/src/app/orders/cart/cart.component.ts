import { Component, OnInit } from '@angular/core';
import { FoodQuantity } from 'src/app/models/foodQuantity';
import { FoodService } from 'src/app/food/food-service';
import { Food } from 'src/app/food/food';
import { OrderService } from '../order.services';
import { Restaurant } from 'src/app/restaurant/restaurant';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  amount:number;
  data:FoodQuantity[];
  restaurant$: Observable<Restaurant>;
  restaurantName:string;
  constructor(private foodService:FoodService,private restaurantService:RestaurantService, private orderService:OrderService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.foodService.cartObservable.subscribe(x=>{
      this.data=x;
      if(this.data.length != 0){
        this.amount = 0;
        for(let a of this.data){

          this.amount += a.totalPrice;
          console.log("amount is",this.amount);
        }
      }
      console.log("inside cart",this.data)
    });
    this.restaurant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.restaurantService.getRestaurant(params.get('id')))
    );
    this.restaurant$.forEach(data => this.restaurantName = data.name);
  }

  deleteFood(x:FoodQuantity){
    let foodId = x.food.id;
    this.data = this.data.filter(x => x.food.id !== foodId);
    console.log(this.data)
    this.updatePrice()
  }
  removeQuatity(food:Food){
    this.data.forEach(foodQuantity => (foodQuantity.food==food && foodQuantity.quantity>0)?(foodQuantity.totalPrice=--foodQuantity.quantity*foodQuantity.food.price):"");
    this.updatePrice();
  }
  addQuatity(food:Food){
    this.data.forEach(foodQuantity => (foodQuantity.food==food && foodQuantity.quantity<10)?(foodQuantity.totalPrice=++foodQuantity.quantity*foodQuantity.food.price):"")
    this.updatePrice();
  }
  updatePrice(){
    this.amount = 0;
    this.data.forEach(foodQuantity => {
      this.amount += foodQuantity.totalPrice;
    })
    this.foodService.updateCartObservable(this.data);
  }  
  checkOutFun(){
    if(this.data!=null){
      alert("Your order is successfull");
    }else{
      alert("Please add item to cart");
    }
    this.orderService.checkOutFun(this.data);

    this.data = null;
    this.amount = 0;
  }

}
