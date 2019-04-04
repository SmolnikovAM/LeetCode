const solution = require('.');

const fs = require('fs');

describe('015 3Sum', () => {
  const sort = arr => {
    const newArr = [];
    arr.forEach(a => {
      const a1 = [...a];
      a1.sort((a, b) => a - b);
      newArr.push(a1);
    });
    newArr.sort((a, b) => (a.toString() >= b.toString() ? 1 : -1));
   // const str = newArr.map(a => a.toString()).toString();

    return newArr;
  };

  test.skip('integer 3', () => {
    const str = fs.readFileSync(
      '/home/andrei/01.Programming/leetcode/js/015. 3Sum/input.txt',
    );
    const nums = str
      .toString()
      .replace('[', '')
      .replace(']')
      .split(',')
      .map(Number);
    //    console.log(nums);

    expect(solution(nums)).toEqual([]);
  });

  test('all zeros', () => {
    const arr = [0, 0, 0, 0];
    const ans = sort(solution(arr));
    const toBe = sort([[0, 0, 0]]);
    expect(ans).toEqual(toBe);
  });

  test('no answer', () => {
    const arr = [1, 2, -2, -1];
    const ans = sort(solution(arr));
    const toBe = sort([]);
    expect(ans).toEqual(toBe);
  });

  test('start', () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    const ans = sort(solution(arr));
    const toBe = sort([[-1, 0, 1], [-1, -1, 2]]);
    expect(ans).toEqual(toBe);
  });

  test('next', () => {
    const arr = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
    const ans = sort(solution(arr));
    const toBe = sort([
      [-5, 1, 4],
      [-4, 0, 4],
      [-4, 1, 3],
      [-2, -2, 4],
      [-2, 1, 1],
      [0, 0, 0],
    ]);
    expect(ans).toEqual(toBe);
  });

  test('tset', () => {
    const arr = [1, 2, -2, -1];
    const ans = sort(solution(arr));
    const toBe = sort([]);
   console.log(ans);
    console.log(toBe);
    expect(ans).toEqual(toBe);
  });
});
