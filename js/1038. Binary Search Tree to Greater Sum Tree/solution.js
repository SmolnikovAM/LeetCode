/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  const stack = [];
  const dfs = node => {
    const {left, right} = node;
    if (left) dfs(left);

    stack.push(node);

    if (right) dfs(right);
  };

  dfs(root);

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    stack[i].val += stack[i + 1] ? stack[i + 1].val : 0;
  }

  return root;
};
