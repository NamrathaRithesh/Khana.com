import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.services';
import { MatDialog } from '@angular/material';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { ViewOrderComponent } from '../view-order/view-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  pastOrderList:Order[]=[];
  orderSubcription:Subscription;
  liveOrderList:Order[]=[];

  constructor(private orderService:OrderService,public dialog: MatDialog) { }

  ngOnInit() {
    // console.log(this.orderService.getOrders())
    this.orderSubcription = this.orderService.ordersObservable.subscribe(
      (data:Order[]) => (this.pastOrderList=data)
    );
    this.orderSubcription = this.orderService.liveObservable.subscribe(data => {this.liveOrderList = data;console.log("data is",this.liveOrderList)});
    this.orderService.getOrders();
  }

  openDialog() {
    const dialogRef = this.dialog.open(OrderDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openviewDialog(){
    const dialogRef = this.dialog.open(ViewOrderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
