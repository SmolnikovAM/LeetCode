/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let cur = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[cur++] = nums[i];
    }
  }

  return cur;
};
