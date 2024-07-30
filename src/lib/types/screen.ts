import { Member } from "./members";
import { Product } from "./product";

//** REACT APP STATE */ => create type integration responsible for all screen components
export interface AppRootState { // homePage State interface
  homepage: HomePageState; 
  
}

//** HomePage */
export interface HomePageState { // homePage State interface
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//** PRODUCTS PAGE */
//** ORDERS PAGE */