const sumAll = require('./1');

describe('question 1', () => {
  test('example input/output', () => {
    const input = [3, 4, 6, 7, 2];
    const output = 22;
    expect(sumAll(input)).toEqual(output);
  })
  test('zero on empty array', () => {
    const input = [];
    const output = 0;
    expect(sumAll(input)).toEqual(output);
  })
})