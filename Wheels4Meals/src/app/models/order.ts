import { User } from './user';
import { Address } from './address';
import { Status } from './status';
import { FoodReview } from './foodReview';
import { Issue } from './issue';
import { Cart } from './cart';
import { DeliveryPartner } from './deliveryPartner';
import { Payment } from './payment';
import { DeliveryPartnerReview } from './deliveryPartnerReview';


export class Order{
    id:number;
    cart:Cart;
    payment:Payment;
    deliveryPartner:DeliveryPartner;
    userName:User;
    statusList:Status;
    address:Address;
    foodReview:FoodReview;
    issue:Issue;
    deliveryPartnerReview:DeliveryPartnerReview;    
}