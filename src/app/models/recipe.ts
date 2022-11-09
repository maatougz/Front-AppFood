import { Dishcategory } from "./dishcategory";
import { User } from "./user";

export class Recipe {
    idRecipe:string='';
    title:string='';
	description:string='';
    preparationTime:string='';
    price:number=0;
    dishcategory?: Dishcategory;
    publisher?: User;
}
