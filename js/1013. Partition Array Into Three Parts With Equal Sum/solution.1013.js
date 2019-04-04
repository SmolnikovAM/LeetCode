/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sumLeft = [];
  let sLeft = 0;
  const sumRight = [];
  let sRight = 0;

  for (let i = 0; i < A.length; i += 1) {
    sLeft += A[i];
    sumLeft[i] = sLeft;
    sRight += A[A.length - 1 - i];
    sumRight[i] = sRight;
  }
  const len = A.length;

  for (let i = 0; i < A.length - 2; i += 1) {
    const sum = sumLeft[i];
    const idx = sumRight.indexOf(sum);
    if (idx !== -1 && len - 1 - idx > i + 1) {
      const s = len - 2 - idx;
      if (sum === sumLeft[s] - sum) {
        return true;
      }
    }
  }
  return false;
};
