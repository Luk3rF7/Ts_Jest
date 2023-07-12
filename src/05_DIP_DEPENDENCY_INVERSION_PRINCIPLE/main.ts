/*
 *
 * MODULOS DE ALTO NIVEL NAO DEVEM DEPENDER  DE MODULOS DE BAIXO NIVEL
 * AMBOS DEVEM DEPENDER DE ABSTRAÇOES
 * DEPENDA DE ABSTRAÇAO,NAO DE IMPLEMENTAÇOES
 * ABSTRAÇOES NAO DEVEM DEPENDER DE DETALHE.DETALHES DEVEM DEPENDER
 * DE ABSTRACAO
 *
 * CLASSE DE BAIXO NIVEL SÃO CLASSES QUE EXECUTAM TAREFA (OS DETALHES)
 * CLASSE DE ALTO NIVEL SAO CLASSE QUE GERENCIA AS CLASS DE BAIXO NIVEL
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
const order = new Order(
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
console.log(order.orderStatus);
console.log();
console.log(order.orderStatus);
