import { FoodQuantity } from './foodQuantity';


export class Cart{
    id:number;
    foodQuantityList:FoodQuantity;
    grandTotal:number;
    offer:string;
    total:number;
    saving:number;
}