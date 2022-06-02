import operate from '../logic/operate';

describe('Test for operations', () => {
  it('should return the sum of 1 + 1 = 2', () => {
    const sum = operate(1, 1, '+');
    expect(sum).toBe('2');
  });

  it('should return the minus of 10 - 1 = 9', () => {
    const minus = operate(10, 1, '-');
    expect(minus).toBe('9');
  });

  it('should return the division of 10 ÷ 2 = 5', () => {
    const division = operate(10, 2, '÷');
    expect(division).toBe('5');
  });

  it('should return the division of 88 ÷ 0 = Can\'t divide by 0.', () => {
    const division = operate(88, 0, '÷');
    expect(division).toBe('Can\'t divide by 0.');
  });

  it('should return the multiplication of 10 x 2 = 20', () => {
    const multiplication = operate(10, 2, 'x');
    expect(multiplication).toBe('20');
  });

  it('should return the modulus of 11 % 2 = 1', () => {
    const modulus = operate(11, 2, '%');
    expect(modulus).toBe('1');
  });

  it('should return the modulus of 35 % 0 = Can\'t find modulo as can\'t divide by 0.', () => {
    const modulus = operate(35, 0, '%');
    expect(modulus).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
