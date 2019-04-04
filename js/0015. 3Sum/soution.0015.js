/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
//  console.log(nums);
  let len = nums.length;
  let oldi;

  let tripple = [];

  for (let i = 0; i < len - 2; i += 1) {
    if (nums[i] > 0) break;
    if (oldi === nums[i]) continue;
    oldi = nums[i];

    let j = i + 1;
    let k = len - 1;
    let oldj;
    let oldk;

    while (j < len - 1 && k > j) {
      const sum = nums[i] + nums[j] + nums[k];
  //     console.log(sum, i, j, k,'---', nums[i], nums[j], nums[k]);

      if (oldj === nums[j] && oldk === nums[k] && sum === 0) {
        j++;
        continue;
      }
      oldj = nums[j];
      oldk = nums[k];

      if (sum === 0) {
        tripple.push([nums[i], nums[j], nums[k]]);
        j++;
      }
      if (sum < 0) {
        j++;
      }
      if (sum > 0) {
        k--;
      }
    }
  }
  return tripple;
};

module.exports = threeSum;
