var smallestRepunitDivByK = function(K) {
  if (!(K % 2) || !(K % 5)) return -1;

  let n1 = 0;
  // ideas:
  // 1. Pigeon Holes. Only K-1 remainders
  // 2. nk1 - nk2 = 11...111 * 100...00
  // 3. if in K no factors 2 or 5 then exists N
  for (let n = 1; n <= K; n += 1) {
    n1 = (n1 * 10 + 1) % K;
    if (n1 === 0) return n;
  }
};
