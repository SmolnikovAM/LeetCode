/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const m = new Map();
  const len = s.length;
  let notRepeat = 0;
  let maxLen = 0;

  for (let i = 0; i < len; i += 1) {
    let idx = m.get(s[i]);
    if (idx === undefined || idx < notRepeat) {
      m.set(s[i], i);
      continue;
    }
    m.set(s[i], i);
    maxLen = Math.max(maxLen, i - notRepeat);
    notRepeat = idx + 1;
  }
  maxLen = Math.max(maxLen, len - notRepeat);
  return maxLen;
};
