/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const stack = [[s.length - 1, p.length - 1]];
  const match = (str, pat) => {
    if (pat[0] === str) return true;
    if (pat[0] === '.') return true;
    if (pat[1] === '*') return true;
    return false;
  };
  while (stack.length) {
    let [si, pi] = stack.pop();

    const sc = s[si];
    const pc = p[pi] === '*' ? p[pi - 1] + p[pi] : p[pi];

    if (si <= -1 && pi <= -1) return true;
    if (si === -1) {
      if (pc && pc[1] === '*') {
        stack.push([si, pi - 2]);
      }
      continue;
    }
    if (pi <= -1 && si >= 0) {
      continue;
    }

    if (match(sc, pc)) {
      if (pc.length === 2) {
        if (sc === pc[0] || pc[0] === '.') {
          stack.push([si - 1, pi - 2]);
          stack.push([si - 1, pi]);
        }
        stack.push([si, pi - 2]);
      } else {
        stack.push([si - 1, pi - 1]);
      }
    }
  }
  return false;
};
