import { Persistency } from '../service/persistency';

describe('Persistency', () => {
  it('should return undefined', () => {
    //system under test = classe sendo testada
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });
  it('should call console.log once', () => {
    //system under test = classe sendo testada
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log once', () => {
    //system under test = classe sendo testada
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
