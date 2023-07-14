import { Discount } from '../classes/discount';
import { ShoppingCart } from '../classes/shopping_cart';
import { CartItem } from './../classes/interfaces/cart-item';

//factory
const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProduct = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camisa', 40);
  const cartItem2 = createCartItem('Short', 20);
  return { sut, discountMock };
};
describe('ShopingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSutWithProduct();
    expect(sut.isEmpty()).toBe(true);
  });
  it('should be 2 cart items', () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    expect(sut.total()).toBe(2);
    expect(sut.totalWithDiscount()).toBe(2);
  });
});
