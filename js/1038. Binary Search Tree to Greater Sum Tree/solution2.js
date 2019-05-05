var bstToGst = function(root, pre) {
  if (pre === undefined) pre = {val: 0};
  const {left, right} = root;
  if (right) bstToGst(right, pre);
  root.val += pre.val;
  pre.val = root.val;
  if (left) bstToGst(left, pre);
  return root;
};
