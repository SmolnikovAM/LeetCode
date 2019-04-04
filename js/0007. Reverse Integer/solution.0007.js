var reverse = function(x) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  let sign = Math.sign(x);
  x = Math.abs(x);
  let res = 0;
  while (x) {
    res *= 10;
    res += x % 10;
    x -= x % 10;
    x /= 10;
  }
  res *= sign;
  if (res > max) return 0;
  if (res < min) return 0;
  return res;
};
