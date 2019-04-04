/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(N) {
  const arr = [];
  const gen = (n, s, sum) => {
    if (sum === 1 && n === 0) {
      arr.push(s + ')');
      return;
    }

    if (sum > 1 && n === 0) {
      gen(n, s + ')', sum - 1);
      return;
    }

    if (sum === 0 && n > 0) {
      gen(n - 1, s + '(', sum + 1);
      return;
    }

    if (sum > 0 && n > 0) {
      gen(n - 1, s + '(', sum + 1);
      gen(n, s + ')', sum - 1);
    }
  };

  gen(N, '', 0);

  return arr;
};

module.exports = generateParenthesis;
