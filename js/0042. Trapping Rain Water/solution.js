var trap = function(height) {
  const {max, min} = Math;
  const length = height.length;
  let left = 0;
  let right = length - 1;
  let level = 0;
  let water = 0;
  let lh = height[left];
  let rh = height[right];
  for (let i = 0; i < length; i += 1) {
    level = max(level, min(lh, rh));
    if (lh < rh) {
      water += level - lh;
      lh = height[++left];
    } else {
      water += level - rh;
      rh = height[--right];
    }
  }
  return water;
};
