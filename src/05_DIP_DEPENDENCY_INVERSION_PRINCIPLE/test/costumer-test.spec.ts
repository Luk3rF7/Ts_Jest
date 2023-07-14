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
    expect(sut.getName()).toBe('Lucas Felipe');
    expect(sut.getIDN()).toBe('111.111');
  });
});
//Enterprise
const createSutEnterCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
//customer
describe('should test Customer Enterprise', () => {
  const sut = createSutEnterCustomer('Lucas', '111.111');
  expect(sut).toHaveProperty('name', 'Lucas');
  expect(sut).toHaveProperty('cnpj', '111.111');

  //getname : name e cnpj
  describe('should test Customer Enterprise idn', () => {
    const sut = createSutEnterCustomer('Lucas', '111');
    expect(sut.getName).toBe('lucas');
    expect(sut.getIDN).toBe('111');
  });
});
