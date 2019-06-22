import { Order } from './order';
import { Subject } from 'rxjs';
import { ORDERS } from './mock-order';
import { Injectable } from '@angular/core';
import { FoodQuantity } from '../models/foodQuantity';
import { Cart } from '../models/cart';

@Injectable({
    providedIn: 'root'
  })

  export class OrderService {
        pastOrder:Order[];
        liveOrder:Order[];
      temp:Order[];
      ordersObservable: Subject<Order[]>=new Subject<Order[]>();
      liveObservable: Subject<Order[]> = new Subject<Order[]>();

      constructor(){
        this.pastOrder=ORDERS.slice();
        this.liveOrder = [];
      }

      getOrders() {
          console.log(this.temp)
          this.ordersObservable.next(this.pastOrder);
          this.ordersObservable.forEach(data=>console.log(data))
      }

      checkOutFun(value:FoodQuantity[]){
      
        let order = new Order();
        order.id = 1001;
        order.date = new Date().getDate().toString();
        order.cart = this.getCartInstance(value);
        
        this.liveOrder.push(order);
        this.liveObservable.next(this.liveOrder);
         
      }

      getCartInstance(foodQuantity:FoodQuantity[]):Cart{
        let cart = new Cart();
        cart.id = 103;
        cart.foodQuantityList = foodQuantity;
        cart.grandTotal = 0;  
        foodQuantity.forEach(data => (cart.grandTotal += data.totalPrice));
        console.log(cart.grandTotal);

        return cart;
      }
  }