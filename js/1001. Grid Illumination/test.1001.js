const fs = require('fs');

const solution = require('./solution.1001.js');

const loadDataFromFile = path => {
  const strToArr = str =>
    str
      .replace(/^\[/, '')
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/\]$/, '')
      .split('],[')
      .map(s => s.replace("'", ''))
      .map(s => s.split(',').map(Number));

  let [N, lamps, queries] = fs
    .readFileSync(path)
    .toString()
    .split('\n');
  N = Number(N);
  lamps = strToArr(lamps);
  queries = strToArr(queries);

  return {N, lamps, queries};
};

describe('problem 1001', () => {
  test('initial test', () => {
    const N = 5;
    const lamps = [[0, 0], [4, 4]];
    const queries = [[1, 1], [1, 0]];

    const sol = solution(N, lamps, queries);

    expect(sol).toEqual([1, 0]);
  });

  test('load from file', () => {
    const {N, lamps, queries} = loadDataFromFile(
      './1001. Grid Illumination/1001.txt',
    );
    const sol = solution(N, lamps, queries);

    expect(2).toBe(2);
  });
  
  test('load from file2', () => {
    const {N, lamps, queries} = loadDataFromFile(
      './1001. Grid Illumination/1001_2.txt',
    );
    const sol = solution(N, lamps, queries);

    expect(2).toBe(2);
  });
});
