import { User } from './user';
import { Notification } from './notification';
import { Order } from './order';

export class DeliveryPartner{
    partner:User;
    drivingLicense:string;
    vehicleNumber:string;
    vehicleName:string;
    availability:string;
    verificationStatus:boolean;
    notification:Notification;
    orderList:Order;
}