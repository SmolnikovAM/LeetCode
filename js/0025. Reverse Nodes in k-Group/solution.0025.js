/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null) return null;
  if (head.next == null) return head;

  const result = {next: head};
  let before = result;

  while (before && before.next) {
    let first = before.next;
    let last = first;

    for (let i = 1; i < k; i += 1) {
      first = first.next;
      if (!first) break;
    }
    if (!first) break;

    let cursor = before.next;
    before.next = first;
    let after = first.next;
    before = after;
    while (cursor != after) {
      const {next} = cursor;
      cursor.next = before;
      before = cursor;
      cursor = next;
    }
    before = last;
  }

  return result.next;
};
