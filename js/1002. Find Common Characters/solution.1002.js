/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const len = A.length;
  if (A.length === 0 || A[0] === '') return [];

  const ans = A[0].split('');

  for (let i = 1; i < len; i += 1) {
    if (A[i] === '') return [];
    A[i] = A[i].split('');
    let n = ans.length;
    while (n--) {
      const idx = A[i].indexOf(ans[n]);
      if (idx === -1) {
        ans.splice(n, 1);
      } else {
        A[i].splice(idx, 1);
      }
    }
    if (ans.length === 0) return [];
  }
  return ans;
};
