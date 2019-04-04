/*
 *
 * Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

 

Example 1:

Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].

*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  let sum = 0;
  A.sort((a, b) => a - b);
  let i = 0;
  while (A[i] <= 0 && K) {
    A[i] = -A[i];
    K -= 1;
    i += 1;
  }
  if (K) {
    A.sort((a, b) => a - b);
    A[0] = K % 2 ? -A[0] : A[0];
  }
  console.log(A);

  for (i = 0; i < A.length; i += 1) {
    sum += A[i];
  }

  return sum;
};
