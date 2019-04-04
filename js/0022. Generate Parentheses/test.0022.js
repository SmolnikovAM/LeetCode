const solution = require('./solution.0022.js');

describe('problem 0022', () => {
  test('n = 3', () => {
    const n = 3;

    expect(solution(n).sort()).toEqual(
      ['((()))', '()()()', '(())()', '()(())', '(()())'].sort(),
    );
  });
});
