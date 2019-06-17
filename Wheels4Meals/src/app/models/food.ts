import { Restaurant } from './restaurant';


export class Food{
    id:number;
    name:string;
    price:number;
    tax:number;
    restaurantId:number;
    // restaurant:Restaurant;
    availability:boolean;
    imageUrl:string;
    averageRating:number;
    category: string;
    cuisine: string;
    description:string;
    // extrasList:string;
}