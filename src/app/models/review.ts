import { Recipe } from "./recipe";
import { User } from "./user";

export class Review {
    idReview:string='';
    comment:string='';
	nblike:number=0;
    nbdislike:number=0;
    repport:number=0;
    recipe?: Recipe;
    user?:User;
}
