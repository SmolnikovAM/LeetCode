var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;
  const n1 = num1
    .split('')
    .reverse()
    .map(Number);
  const n2 = num2
    .split('')
    .reverse()
    .map(Number);
  const result = [];
  for (let i = 0; i < n1.length; i += 1)
    for (let j = 0; j < n2.length; j += 1)
      result[i + j] = (result[i + j] || 0) + n1[i] * n2[j];
  let idx = 0;
  while (idx < result.length) {
    const num = result[idx];
    if (num > 9) {
      result[idx] = num % 10;
      result[idx + 1] = (result[idx + 1] || 0) + ~~(num / 10);
    }
    idx += 1;
  }
  while (result.length > 0 && result[result.length - 1] === 0) result.pop();
  return result.reverse().join('');
};
