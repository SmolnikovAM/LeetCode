/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  while (N) {
    const s = N.toString(2);
    if (S.indexOf(s) === -1) return false;
    N -= 1;
  }
  return true;
};
