var longestPalindrome = function(s) {
  if (s === '') return '';

  let len = 0;
  let l = 0;
  let r = 1;
  for (let i = 0; i < s.length; i += 1) {
    for (let j = 1; j <= 2; j += 1)
      if (s[i] === s[i - j]) {
        let left = i - j;
        let right = i;
        while (s[left] === s[right] && s[left] && s[right]) {
          --left;
          ++right;
        }
        if (right - ++left > len) {
          len = right - left;
          r = right;
          l = left;
        }
      }
  }

  return s.slice(l, r);
};
