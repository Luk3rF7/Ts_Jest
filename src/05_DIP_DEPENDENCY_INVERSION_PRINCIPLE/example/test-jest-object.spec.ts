describe('Test Object', () => {
  // Fazer um test de cada coisa
  it('Should test assertions ', () => {
    const person = { nome: 'user', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30);
  });
});
