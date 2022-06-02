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
    expect(ACBtn).toEqual({ total: "7", next: "9", operation: "x" });
  });
});
