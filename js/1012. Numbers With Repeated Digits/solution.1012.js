/**
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function(N) {
  // const A = (n, k) => (k === 0 ? 1 : A(n, k - 1) * (n - k + 1));
  const A = (n, k) => {
    let res = 1;
    let nn = n;
    while (nn > n - k) res *= nn--;
    return res;
  };

  let res = 0;
  let nn = N + 1;

  const nums = [];
  while (nn) {
    nums.unshift(nn % 10);
    nn = ~~(nn / 10);
  }
  const n = nums.length;

  for (let i = 1; i < n; i += 1) {
    res += 9 * A(9, i - 1);
  }

  const seen = [];
  for (let i = 0; i < n; i += 1) {
    for (let j = i === 0 ? 1 : 0; j < nums[i]; j += 1) {
      if (!seen[j]) res += A(9 - i, n - i - 1);
    }
    if (seen[nums[i]]) break;
    seen[nums[i]] = true;
  }

  return N - res;
};
