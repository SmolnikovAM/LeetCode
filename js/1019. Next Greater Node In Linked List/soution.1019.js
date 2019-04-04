var nextLargerNodes = function(head) {
  const res = [];
  const stack = [];
  while (head) {
    while (stack.length && stack[stack.length - 1][1] < head.val) {
      res[stack.pop()[0]] = head.val;
    }
    stack.push([res.length, head.val]);
    res.push(0);
    head = head.next;
  }
  return res;
};
