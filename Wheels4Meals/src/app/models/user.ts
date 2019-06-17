import { ContactDetail } from './contactDetail';

export class User{
    id: number;
    name:string;
    username:string;
    password:string;
    role:string;
    age:number;
    gender:string;
    contactDetails:ContactDetail;
}