import { IndividualCustomer, EnterpriseCustomer } from '../classes/custumers';

const createSutIndCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
//customer
describe('should test Customer', () => {
  const sut = createSutIndCustomer('Lucas', 'Felipe', '111.111');
  expect(sut).toHaveProperty('firstName', 'Lucas');
  expect(sut).toHaveProperty('lastName', 'Felipe');
  expect(sut).toHaveProperty('cpf', '111.111');
  //getname,lastname,cpf
  describe('should test Customer', () => {
    const sut = createSutIndCustomer('Lucas', 'Felipe', '111.111');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Felipe');
    expect(sut).toHaveProperty('cpf', '111.111');
  });
});
const createSutEnterCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
//customer
describe('should test Customer Enterprise', () => {
  const sut = createSutEnterCustomer('Lucas', '111.111');
  expect(sut).toHaveProperty('firstName', 'Lucas');
  expect(sut).toHaveProperty('lastName', 'Felipe');

  //getname : name e cnpj
  describe('should test Customer Enterprise idn', () => {
    const sut = createSutEnterCustomer('Lucas', '111.111');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Felipe');
    expect(sut).toHaveProperty('cpf', '111.111');
  });
});
