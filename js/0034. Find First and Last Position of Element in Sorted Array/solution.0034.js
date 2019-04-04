/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const binary = (i, j) => {
    if (i >= j) return null;

    const mid = ~~((i + j) / 2);
    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      return binary(i, mid);
    } else {
      return binary(mid + 1, j);
    }
  };

  let low = binary(0, nums.length);
  if (low === null) return [-1, -1];
  let high = low;
  while (nums[low] === target) --low;
  while (nums[high] === target) ++high;
  return [low + 1, high - 1];
};
