/*
 * LISKOV SUBSTITUTION PRINCIPLE (principios da substituição de liskov)
 * se o (x) e uma propriedade demonstravel dos obj x do tipo T.Entao o (y)
 * deve ser verdadeiro para objetos y de tipo S onde S e um subtipo de T.
 *            ============= simplificando ==========
 *  Subtipos precisam ser substituiveis por seus tipo de base
 *  mais simples ainda :se meu programa espera um Animal,algo do tipo
 *  cachorro (Herda de Animal) deve servir como qualquer outro Animal
 */
import { ShoppingCart } from './classes/shopping_cart';
import { Order } from './classes/order';
import { Messaging } from './service/message';
import { Persistency } from './service/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/custumers';
//
/* const fiftpercentDiscount = new FiftyPercentDiscount();
const tenpercentDiscount = new TenPercentDiscount();
* injeção de dependency */
const messaging = new Messaging();
const individualCustomers = new IndividualCustomer(
  'Lucas',
  'Felipe',
  '111-111-111-11',
);
const persistency = new Persistency();
const noDiscount10 = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount10);

/* const shoppingCart10 = new ShoppingCart(tenpercentDiscount);
const shoppingCart50 = new ShoppingCart(fiftpercentDiscount); */

//
const orderStatus = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomers,
);
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
