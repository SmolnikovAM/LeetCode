/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = {next: null};
  let cursor = result;
  while (l1 || l2) {
    if (!l2 || (l1 && l1.val < l2.val)) {
      cursor.next = l1;
      l1 = l1.next;
    } else {
      cursor.next = l2;
      l2 = l2.next;
    }
    cursor = cursor.next;
  }
  return result.next;
};
