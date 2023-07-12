import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer_protocol';
import { MessagingProtocol } from './interfaces/messaging_protocol';
import { ShoppingCartProtocol } from './interfaces/shopping_cart_protocolo';
import { PersistencyProtocol } from './interfaces/persistency_protocol';
//
export class Order {
  private _ordenStatus: OrderStatus = 'open';
  constructor(
    // injeção de independencia
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}
  get orderStatus(): OrderStatus {
    return this._ordenStatus;
  }

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
    console.log(
      'O cliente é :',
      this.customer.getIDN(),
      this.customer.getName(),
    );
  }
}
