var prefixesDivBy5 = function(A) {
  let num = 0;
  for (let i = 0; i < A.length; i += 1) {
    num *= 2;
    num += A[i];
    num = num % 5;
    A[i] = num === 0;
  }
  return A;
};
