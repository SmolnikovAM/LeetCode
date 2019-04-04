/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max = 0;
  let maxOld = A[0];
  for (let i = 1; i < A.length; i += 1) {
    const a = A[i];
    max = Math.max(max, a - i + maxOld);
    maxOld = Math.max(maxOld, a + i);
  }
  return max;
};
