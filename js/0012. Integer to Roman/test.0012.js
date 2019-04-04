const solution = require('./solution.0012');


describe('012 Integer to Roman', () => {
  
  test('integer 3', () => {
    expect(solution(3)).toBe('III');
  });
  
  test('integer 4', () => {
    expect(solution(4)).toBe('IV');
  });
  
  test('integer 9', () => {
    expect(solution(9)).toBe('IX');
  });

  test('integer 58', () => {
    expect(solution(58)).toBe('LVIII');
  });

  test('integer 1994', () => {
    expect(solution(1994)).toBe('MCMXCIV');
  });
 
  test('integer 27', () => {
    expect(solution(27)).toBe('XXVII');
  });

  test('integer 101', () => {
    expect(solution(101)).toBe('CI');
  });

  test('integer 1001', () => {
    expect(solution(1001)).toBe('MI');
  });
});
