/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(
    N.toString(2)
      .split('')
      .map(x => 1 - Number(x))
      .join(''),
    2,
  );
};

module.exports = bitwiseComplement;
