/**
 * @param {number[]} left1
 * @param {number} l
 * @param {number[]} right
 * @param {number} r
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(left, l, right, r) {
  let idx = left.length;
  let li = l - 1;
  let ri = r - 1;

  while(--idx >= 0)
    left[idx] = ((ri < 0) || (li >= 0 && left[li] >= right[ri]))
      ? left[li--]
      : right[ri--];
};
