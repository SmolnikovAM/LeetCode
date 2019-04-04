/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.
  let k;
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    if (nums[i] < nums[i + 1]) {
      k = i;
      break;
    }
  }
  if (k === undefined) return nums.sort((a, b) => a - b);

  // Find the largest index l greater than k such that a[k] < a[l].
  let l;
  for (let i = nums.length - 1; i > k; i -= 1) {
    if (nums[k] < nums[i]) {
      l = i;
      break;
    }
  }

  // Swap the value of a[k] with that of a[l].
  [nums[k], nums[l]] = [nums[l], nums[k]];

  // Reverse the sequence from a[k + 1] up to and including the final element a[n].
  for (let i = k + 1, r = nums.length - 1; i < r; i += 1, r -= 1) {
    [nums[r], nums[i]] = [nums[i], nums[r]];
  }

  return nums;
};

module.exports = nextPermutation;
