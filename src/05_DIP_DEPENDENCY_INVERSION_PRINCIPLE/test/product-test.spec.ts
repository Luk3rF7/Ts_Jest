import { Product } from '../classes/product';
import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from '../classes/discount';
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};
const createSutDisc = (className: new () => Discount): Discount => {
  return new className();
};
describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut('camisa', 49.9);
    expect(sut).toHaveProperty('name', 'camisa');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should not Discount', () => {
    const sut = createSutDisc(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });
  it('should 50% Discount', () => {
    const sut = createSutDisc(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75, 25);
  });
  it('should 10% Discount', () => {
    const sut = createSutDisc(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(10);
  });
});
