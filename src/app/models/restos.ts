import { Brand } from "./brand";
import { Placecategory } from "./placecategory";

export class Restos {
    idresto:string='';
    restoname:string='';
	location:string='';
	brand?: Brand;
    placecategory?: Placecategory;
}
