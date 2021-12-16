import calculate from '../logic/calculate';

describe('AC erase all', () => {
  const object = {
    total: 10,
    next: null,
    operation: '+',
  };
  test('when user press AC reset all object', () => {
    expect(calculate(object, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('Next value save in total', () => {
  const object = {
    total: '2',
    next: '11',
    operation: null,
  };
  test('when user goes next operation, the next will be the new total', () => {
    expect(calculate(object, '+')).toEqual({ total: '11', next: null, operation: '+' });
  });
});
