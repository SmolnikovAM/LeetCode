/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
  if (len < 4) return [];

  nums.sort((a, b) => a - b);
  const ans = [];

  const mm = [];;

  for (let i = 0; i <= len - 4; i += 1) {
    for (let j = i + 1; j <= len - 3; j += 1) {
      let k = j + 1;
      let w = len - 1;
      while (k < w) {
        const d = [i, j, k, w].map(l => nums[l]);
        const [di, dj, dk, dw] = d;
        const sum = di + dj + dk + dw - target;

        if (sum === 0) {
          const ds = d.toString()
          if(mm.indexOf(ds) === -1){
             ans.push(d);
             mm.push(ds);
             
          }
          k += 1;
        } else if (sum < 0) {
          k += 1;
        } else if (sum > 0) {
          w -= 1;
        }
      }
    }
  }

  return ans;
}


console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

;
