import calculate from '../logic/calculate';

describe('Test the calculate operations', () => {
  it('Test the AC button', () => {
    const ACBtn = calculate({}, 'AC');
    expect(ACBtn).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Test 9 button properly when 7 and x are already recorded ', () => {
    const ACBtn = calculate({ total: '7', next: null, operation: 'x' }, '9');
    expect(ACBtn).toEqual({ total: '7', next: '9', operation: 'x' });
  });

  it('Test = button properly when 9 ÷ 2 are already recorded', () => {
    const btn = calculate({ total: '9', next: '2', operation: '÷' }, '=');
    expect(btn).toEqual({ total: '4.5', next: null, operation: null });
  });

  it('Test 5 button properly when 3.14 are already recorded', () => {
    const btn = calculate({ next: '3.14', total: null }, '5');
    expect(btn).toEqual({ next: '3.145', total: null });
  });

  it('Test + button properly when 36 % 5 are already recorded', () => {
    const btn = calculate({ total: '36', next: '5', operation: '%' }, '+');
    expect(btn).toEqual({ total: '1', next: null, operation: '+' });
  });
});
