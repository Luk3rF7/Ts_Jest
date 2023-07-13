describe('Primitivos values', () => {
  // Fazer um test de cada coisa
  it('Should test assertions ', () => {
    const number = 10;

    expect(number).toBe(10);
    //para trabalhar com obj:
    expect(number).toEqual(10);

    //falso ou true
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    //checagem:
    // >
    expect(number).toBeGreaterThan(9);
    //  >=
    expect(number).toBeGreaterThanOrEqual(10);
    // <
    expect(number).toBeLessThan(11);
    //  <=
    expect(number).toBeLessThanOrEqual(10);
    //numero proximo: checagem aproximada
    /*     expect(number).toBeCloseTo(10);
    expect(number).toBeCloseTo(10); */
    //verifica se e null
    expect(number).not.toBeNull();
    //verficia se tem toString
    expect(number).toHaveProperty('toString');
  });
});
