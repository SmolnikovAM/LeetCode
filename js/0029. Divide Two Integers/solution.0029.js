/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const {log, exp, floor} = Math;
  const infinite = 2147483647;
  const infiniteMinus = 2147483648;

  let sign = 1;
  if (dividend < 0) {
    sign = -sign;
    dividend = -dividend;
  }
  if (divisor < 0) {
    sign = -sign;
    divisor = -divisor;
  }
  const ans = floor(exp(log(dividend) - log(divisor)));
  if (ans > infinite && sign > 0) return infinite;
  if (ans > infiniteMinus && sign > 0) return -infiniteMinus;
  return sign < 0 ? -ans : ans;
};
