import { Dishcategory } from "./dishcategory";
import { Restos } from "./restos";

export class Dish {
    idDish:string='';
    dishname:string='';
	dishDescription:string='';
    price:number=0;
    resto?:Restos;
    dishcategory?: Dishcategory;
}
