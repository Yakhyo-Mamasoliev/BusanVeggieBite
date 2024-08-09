/* eslint-disable @typescript-eslint/no-redeclare */
import { Member } from "./member";
import { Product } from "./product";
import ProductsPage from "../../app/screens/productsPage/index";
import { Order } from "./order";

/* React APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
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
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
