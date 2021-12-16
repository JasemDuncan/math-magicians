import operate from '../logic/operate';

describe('The basic Calc operation', () => {
  test('When user mades an addition', () => {
    expect(operate(18, 19, '+')).toEqual('37');
  });
  test('When user mades a subtraction', () => {
    expect(operate(50, 70, '-')).toEqual('-20');
  });
  test('When user mades a multplication', () => {
    expect(operate(40, 40, 'x')).toEqual('1600');
  });
  test('When user mades a division', () => {
    expect(operate(80, 8, '÷')).toEqual('10');
  });
  test('When user mades a division by 0: ERROR', () => {
    expect(operate(10, 0, '÷')).toEqual('Can\'t divide by 0.');
  });
});
