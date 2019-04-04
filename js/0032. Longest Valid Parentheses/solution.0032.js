// 0032. Longest Valid Parentheses
//
//
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length < 2) return 0;

  const stack = [s[0] === '(' ? 1 : -1];
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === '(') {
      stack.push(i + 1);
    } else {
      const len = stack.length;
      if (len && stack[len - 1] >= 1) stack.pop();
      else stack.push(-(i + 1));
    }
  }

  if (stack.length === 0) {
    return s.length;
  }
  stack.unshift(0);
  stack.push(s.length + 1);
  let ans = 0;
  for (let i = 0; i < stack.length - 1; i += 1) {
    ans = Math.max(ans, Math.abs(stack[i + 1]) - Math.abs(stack[i]) - 1);
  }

  // console.log(stack)
  return ans;
};

module.exports = longestValidParentheses;
