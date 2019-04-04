var longestCommonPrefix = function(strs) {
  let len = strs.length;
  if (len === 0) return '';
  let idx = strs[0].length;
  let i = 1;

  while (idx && i < len) {
    const word = strs[i++];
    idx = Math.min(idx, word.length);
    for (let j = 0; j < idx; j += 1) {
      if (strs[0][j] !== word[j]) {
        idx = j;
        break;
      }
    }
  }
  return strs[0].slice(0, idx);
};
