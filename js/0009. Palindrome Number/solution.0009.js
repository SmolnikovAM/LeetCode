var isPalindrome = function(x) {
  if (x < 0) return false;
  let t = x;
  let y = 0;
  while (t) {
    y *= 10;
    y += t % 10;
    t -= t % 10;
    t /= 10;
  }
  return x === y;
};
