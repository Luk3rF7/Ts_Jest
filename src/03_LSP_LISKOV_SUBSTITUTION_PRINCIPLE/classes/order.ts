import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../service/message';
import { ShoppingCart } from './shopping_cart';
import { Persistency } from '../service/persistency';
export class Order {
  private _ordenStatus: OrderStatus = 'open';
  constructor(
    // injeção de independencia
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}
  get orderStatus(): OrderStatus {
    return this._ordenStatus;
  }
  //
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está Vazio..');
    }
    this._ordenStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()}foi Recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
