import { Observable, Subject, of } from 'rxjs';
import { Food } from './food';
import { FOODS } from './food-mock';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FoodQuantity } from '../models/foodQuantity';

@Injectable({
    providedIn: 'root'
  })

export class FoodService{
    temp:Food[];
    cartArray = [];
    foodObservable: Subject<Food[]>=new Subject<Food[]>();
    cartObservable:Subject<FoodQuantity[]> = new Subject<FoodQuantity[]>();


    constructor(){
        this.temp = FOODS.slice();
    }

    getFoods(restaurantId){
        this.temp = FOODS.filter(food => food.restaurantId === +restaurantId)
        this.foodObservable.next(this.temp);
        return of(this.temp)
    }

    addToCart(food:Food){
        let tempFoodQ = this.cartArray.find(foodQ=>(foodQ.food == food));
        if(tempFoodQ==null)
        this.cartArray.push({food:food,quantity:1,totalPrice:food.price});
        else
        this.cartArray.forEach(foodQ => 
            {tempFoodQ.totalPrice=((tempFoodQ.quantity<10)?++tempFoodQ.quantity:tempFoodQ.quantity)*tempFoodQ.food.price;
            foodQ==tempFoodQ})

      //this.totalAmount.push(food.price);
         this.cartObservable.next(this.cartArray);
    }

    getFoodsAdded(){
        this.cartObservable.next(this.cartArray);
      }
      updateCartObservable(data){
        this.cartArray = data;
        console.log(data)
        this.cartObservable.next(this.cartArray);
        this.cartObservable.forEach(data=>console.log(data));
      }

    // getFood(id: number | string){
    //     return this.getFoods(id).pipe(
    //         map((foods : Food[]) => foods.find(food => food.id === +id))
    //     );
    // }

    getCategoryFood(category){
        // FOODS.forEach(food => console.log(food.category.toString().toLowerCase().replace(" ","").search(category.toLowerCase().replace(" ",""))));
        return of(this.temp.filter(food => (food.category.toString().toLowerCase().replace(" ","").indexOf(category.toLowerCase().replace(" ","")))!=-1));
    }

    getFoodByCategory(category:string){
        
        return this.getCategoryFood(category);
        // return this.getCategoryFood(category).pipe(
        //     map((foods : Food[]) => foods.filter(food => food.category === category))
        // );
    }
}