import { User } from '../models/user';
import { Address } from '../models/address';
import { Status } from '../models/status';
import { FoodReview } from '../models/foodReview';
import { Issue } from '../models/issue';
import { Cart } from '../models/cart';
import { DeliveryPartner } from '../models/deliveryPartner';
import { Payment } from '../models/payment';
import { DeliveryPartnerReview } from '../models/deliveryPartnerReview';


export class Order{
    id:number;
    date:string;
    cart:Cart;
    payment:Payment;
    deliveryPartner:DeliveryPartner;
    userName:User;
    statusList:Status[];
    address:Address;
    foodReview:FoodReview;
    issue:Issue;
    deliveryPartnerReview:DeliveryPartnerReview;    
}