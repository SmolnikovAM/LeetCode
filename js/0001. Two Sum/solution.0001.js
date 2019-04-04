/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  const m = new Map();
  while (len--) {
    const i = m.get(target - nums[len]);
    if (i !== undefined) return [len, i];
    m.set(nums[len], len);
  }
};
