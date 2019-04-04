/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  const infMin = -(2 ** 31);
  const infMax = 2 ** 31 - 1;
  const operations = ['*', '/', '+', '-'];
  let k = 0;
  const arr = Array.from({length: 2 * N}).map((_, i) => {
    if (i % 2) {
      return operations[k++ % 4];
    }
    return N - i / 2;
  });

  arr.pop();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '/') {
      const left = arr[i - 1];
      const right = arr[i + 1];
      arr.splice(i, 2);
      arr[i - 1] = Math.floor(left / right);
      i -= 2;
    }
    if (arr[i] === '*') {
      const left = arr[i - 1];
      const right = arr[i + 1];
      arr.splice(i, 2);
      arr[i - 1] = left * right;
      i -= 2;
    }
  }
  //console.log(arr.join(''))
  const sum = eval(arr.join(''));
  if (sum > infMax) return infMax;
  if (sum < infMin) return infMin;
  return sum;
};

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(clumsy),
);
