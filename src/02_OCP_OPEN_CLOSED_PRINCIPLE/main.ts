/*
 * OPEN / CLOSED PRINCIPLE
 * Entidade devem estar aberta para extensão ,mas fechada para modificação
 */
import { ShoppingCart } from './classes/shopping_cart';
import { Order } from './classes/order';
import { Messaging } from './service/message';
import { Persistency } from './service/persistency';
import { Product } from './classes/product';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
//
const fiftpercentDiscount = new FiftyPercentDiscount();
const tenpercentDiscount = new TenPercentDiscount();
//injeção de dependency
const messaging = new Messaging();
const persistency = new Persistency();
const noDiscount10 = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount10);

const shoppingCart10 = new ShoppingCart(tenpercentDiscount);
const shoppingCart50 = new ShoppingCart(fiftpercentDiscount);

//
const orderStatus = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('t-shirt', 49.9));
shoppingCart.addItem(new Product('pen', 9.9));
shoppingCart.addItem(new Product('book', 19.9));
shoppingCart.addItem(new Product('body', 59.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.totalWithDiscount());
console.log();
console.log(orderStatus);
console.log(orderStatus);
