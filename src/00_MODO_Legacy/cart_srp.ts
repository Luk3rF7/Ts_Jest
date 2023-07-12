type cartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';
export class ShoppingCartLegacy {
  private readonly _items: cartItem[] = [];
  private _ordenStatus: OrderStatus = 'open';
  addItem(item: cartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<cartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._ordenStatus;
  }
  total(): number {
    return +this.items.reduce((item, qtd) => item + qtd.price, 0).toFixed(2);
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está Vazio..');
    }
    this._ordenStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()}foi Recebido!`);
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo com sucesso!');
    this._items.length = 0;
  }
}
const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 't-shirt', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'pen', price: 9.9 });
shoppingCartLegacy.addItem({ name: 'book', price: 19.9 });
shoppingCartLegacy.addItem({ name: 'body', price: 59.9 });

console.log(shoppingCartLegacy.items);
console.log();
