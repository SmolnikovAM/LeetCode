/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < weights.length; i += 1) {
    max = Math.max(max, weights[i]);
    sum += weights[i];
  }

  max = Math.max(max, Math.ceil(sum / D));

  while (true) {
    let pos = 0;
    for (let i = 1; i <= D; i += 1) {
      let w = 0;
      while (pos < weights.length) {
        if (w + weights[pos] > max) break;
        w += weights[pos++];
      }
    }
    if (pos === weights.length) return max;
    max += 1;
  }
};

var shipWithinDays_Binary = function(weights, D) {
  let high = 0;
  let low = 0;
  let len = weights.length;
  for (let i = 0; i < len; i += 1) {
    const w = weights[i];
    high += w;
    low = Math.max(low, w);
  }
  low = Math.max(low, ~~(high / D));

  const check = v => {
    let res = 1;
    let cur = 0;
    for (let i = 0; i < len; i += 1) {
      const w = weights[i];
      if (cur + w > v) {
        res += 1;
        cur = 0;
      }
      cur += w;
    }
    return res;
  };

  while (low !== high) {
    const mid = ~~((low + high) / 2);
    if (check(mid) <= D) high = mid;
    else low += 1;
  }
  return low;
};
