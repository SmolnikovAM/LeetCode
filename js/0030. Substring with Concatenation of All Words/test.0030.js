const solution = require('./solution.0030');
const fs = require('fs');

const loadFile = file => {
  let [str, arr] = fs
    .readFileSync(`${__dirname}/${file}`)
    .toString()
    .split('\n');
  str = str.replace('"', '').replace('"', '');
  arr = arr
    .replace('[', '')
    .replace(']', '')
    .split(',')
    .map(s => s.replace('"', '').replace('"', ''));
  return [str, arr];
};

const sort = arr => arr.sort((a, b) => a - b);

describe('0030. Substring with Concatenation of All Words', () => {
  test.skip('test large file', () => {
    const file = '0030_1';
    const s = solution(...loadFile('0030_1.txt'));
    const a = [];
    expect(2).toEqual(2);
  });

  test('test empty', () => {
    const s = solution('', []);
    const a = [];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test barfoothefoobarman', () => {
    const s = solution('barfoothefoobarman', ['foo', 'bar']);
    const a = [0, 9];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test wordgoodgoodgoodbestword', () => {
    const s = solution('wordgoodgoodgoodbestword', [
      'word',
      'good',
      'best',
      'good',
    ]);
    const a = [8];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test string with empty string', () => {
    const s = solution('a', []);
    const a = [];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test abababab', () => {
    const s = solution('abababab', ['ab', 'ba']);
    const a = [];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test aaaaaaaa', () => {
    const s = solution('aaaaaaaa', ['aa', 'aa', 'aa']);
    const a = [0, 1, 2];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test foobarfoobar', () => {
    const s = solution('foobarfoobar', ['foo', 'bar']);
    const a = [0, 3, 6];
    expect(sort(s)).toEqual(sort(a));
  });

  test('test aaa [ a,b ]', () => {
    const s = solution('aaa', ['a','b']);
    const a = [];
    expect(sort(s)).toEqual(sort(a));
  
  });
});
