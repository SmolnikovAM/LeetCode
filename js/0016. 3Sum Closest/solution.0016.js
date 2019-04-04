/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let len = nums.length;
    // let answer = [];
    let answerSum = Infinity;

  for (let i = 0; i < len - 2; i += 1) {
    let j = i + 1;
    let k = len - 1;
 
    while (j < len - 1 && k > j) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return target;
      }     
      if (Math.abs(sum - target) < Math.abs(answerSum - target)) {
       // answer = [i, j, k];
        answerSum = sum;
      }      
      if (sum < target) {
        j++;
      }
      if (sum > target) {
        k--;
      }
    }
  }
  return answerSum;
};
