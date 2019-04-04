/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, from, to) {
  if (from === undefined) {
    from = 0;
    to = nums.length - 1;
  }
  if (from > to) return -1;
  if (from === to) return nums[from] === target ? from : -1;
  const div = ~~((to + from) / 2);
  const num = nums[div];
  if (num === target) return div;

  if (nums[from] < nums[to]) {
    // if(target < nums[from] || target > nums[to]) return -1;
    if (target < num) return search(nums, target, from, div);
    return search(nums, target, div + 1, to);
  }

  let idx = search(nums, target, div + 1, to);
  if (idx !== -1) return idx;
  return search(nums, target, from, div);
};

module.exports = search;
