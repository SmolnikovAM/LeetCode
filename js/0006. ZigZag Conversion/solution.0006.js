var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const len = s.length;
  let direction = 1;
  let cur = 0;
  const res = new Array(numRows).fill('');
  for (let i = 0; i < len; i += 1) {
    if (cur === numRows || cur === -1) {
      cur = cur - 2 * direction;
      direction = direction === 1 ? -1 : 1;
    }

    res[cur] += s[i];
    cur += direction;
  }
  return res.join('');
};
