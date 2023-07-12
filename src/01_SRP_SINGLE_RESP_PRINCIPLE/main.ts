import { ShoppingCart } from './enties/shopping_cart';
import { Order } from './enties/order';
import { Messaging } from './service/message';
import { Persistency } from './service/persistency';
import { Product } from './enties/product';

const shoppingCart = new ShoppingCart();
//injeção de dependency
const messaging = new Messaging();
const persistency = new Persistency();

const orderStatus = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('t-shirt', 49.9));
shoppingCart.addItem(new Product('pen', 9.9));
shoppingCart.addItem(new Product('book', 19.9));
shoppingCart.addItem(new Product('body', 59.9));

console.log(shoppingCart.items);
console.log();
console.log(orderStatus);
console.log(orderStatus);
