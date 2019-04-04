var bstFromPreorder = function(preorder) {
  const root = new TreeNode(preorder[0]);
  const stack = [root];

  for (let i = 1; i < preorder.length; i += 1) {
    const val = preorder[i];
    const len = stack.length;
    if (val < stack[len - 1].val) {
      stack.push(new TreeNode(val));
      stack[len - 1].left = stack[len];
    } else {
      let last;
      while (stack.length && stack[stack.length - 1].val < val)
        last = stack.pop();
      last.right = new TreeNode(val);
      stack.push(last.right);
    }
  }
  return root;
};

module.exports = bstFromPreorder;
