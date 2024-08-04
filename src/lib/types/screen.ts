/* eslint-disable @typescript-eslint/no-redeclare */
import { Member } from "./member";
import { Product } from "./product";
import ProductsPage from "../../app/screens/productsPage/index";

/* React APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

//* HOMEPAGE */

export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//** PRODUCTS PAGE HERE */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

//** ORDERS PAGE HERE **
