
import { User } from './user';
import { Branch } from './branch';
import { Address } from './address';
import { FoodReview } from './foodReview';
import { Order } from './order';
import { Notification } from './notification';

export class Restaurant{
    id:number;
    name:string;
    manager: string;
    fassaid:string;
    gstNumber: string;
    imageUrl:string;
    cuisine:string[];
    address:Address;
    timings: string;
    averageRating: number;
    averagePrice: number;
    type: string[];
    reviewList: FoodReview[];
    orderList: Order[];
    notification:Notification;
}