var maxUncrossedLines = function(a, b) {
  const la = a.length;
  const lb = b.length;
  a.unshift(0);
  b.unshift(0);
  const c = a.map(() => b.map(() => 0));
  for (let i = 1; i <= la; i += 1)
    for (let j = 1; j <= lb; j += 1)
      if (a[i] === b[j]) c[i][j] = c[i - 1][j - 1] + 1;
      else c[i][j] = Math.max(c[i - 1][j], c[i][j - 1]);
  return c[la][lb];
};
