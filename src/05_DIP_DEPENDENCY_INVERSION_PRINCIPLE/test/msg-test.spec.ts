import { Messaging } from './../service/message';

const createSut = () => {
  return new Messaging();
};
describe('Persistency', () => {
  it('should return undefined', () => {
    //system under test = classe sendo testada
    const sut = createSut();
    expect(sut.sendMessage('test')).toBeUndefined();
  });
  it('should call console.log once', () => {
    //system under test = classe sendo testada
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log once', () => {
    //system under test = classe sendo testada
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada', 'teste');
  });
});
