var myAtoi = function(str) {
  str = str.trim();
  const max = 2 ** 31 - 1;
  const min = 2 ** 31;
  let sign = 1;
  if (str[0] === '-' || str[0] === '+') {
    sign = str[0] === '-' ? -1 : 1;
    str = str.slice(1);
  }
  let i = 0;
  let res = 0;
  while (str[i] !== ' ' && !Number.isNaN(Number(str[i]))) {
    res *= 10;
    res += Number(str[i]);
    if (res > max && sign === 1) return max;
    if (res > min && sign === -1) return -min;
    i += 1;
  }
  return res * sign;
};
