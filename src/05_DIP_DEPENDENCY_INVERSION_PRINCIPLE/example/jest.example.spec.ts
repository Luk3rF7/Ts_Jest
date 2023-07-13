/*
posso usar:
it();
test();

*/
describe('TESTANDO ALGO ', () => {
  // <-descrição do test
  it('descrição do teste (it)', () => {
    const number = 1;
    expect(number).toBe(1);
    // expect(number).not.toBe(1); <-- negação
  });
});

describe('descrição do segundo teste', () => {
  test('descrição de teste(TESTE', () => {
    const nome = 'Lucas';
    expect(nome).toBe('Lucas');
  });
});
