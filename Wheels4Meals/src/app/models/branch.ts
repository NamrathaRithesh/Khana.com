import { User } from './user';
import { Address } from './address';
import { Review } from './review';
import { Order } from './order';


export class Branch{
    id:number;
    manager:User;
    fassaid:string;
    gstNum:string;
    cuisine:string;
    address:Address;
    timing:string;
    reviewList:Review;
    orderList:Order;
    notification:Notification;
}