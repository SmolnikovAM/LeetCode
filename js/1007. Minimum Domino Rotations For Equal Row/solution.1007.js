/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const [r] = A.reduce((sum, a, i) => {
    const b = B[i];
    if (a === b) {
      sum[a].union += 1;
    } else {
      sum[a].a += 1;
      sum[b].b += 1;
    }
    return sum;
  }, Array.from({length: 7}).map(() => ({a: 0, b: 0, union: 0}))).filter(
    s => s.a + s.b + s.union === A.length,
  );

  if (!r) return -1;

  return Math.min(r.a, r.b);
};

module.exports = minDominoRotations;
