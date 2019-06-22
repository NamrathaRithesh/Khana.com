
import { User } from '../models/user';
import { Branch } from '../models/branch';
import { Address } from '../models/address';
import { FoodReview } from '../models/foodReview';
import { Order } from '../orders/order';
import { Notification } from '../models/notification';



export class Restaurant{
    id: number;
    name: string;
    manager: string;
    fassaid: string;
    gstNumber: string;
    imageUrl: string;
    cuisine: string[];
    address: Address;
    timings: string;
    averageRating: number;
    averagePrice: number;
    type: string[];
    reviewList: FoodReview[];
    orderList: Order[];
    notification: Notification;
}