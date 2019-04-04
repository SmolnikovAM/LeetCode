/*
var removeNthFromEnd = function(head, n) {
  var left, before, right = head;
  left = before = {next: head}; 
  while (n--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return before.next;
};
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const list = [];
    let link = head;
    
    while(link){
        list.push(link);
        link = link.next;
    }
    const len = list.length;
    
    if(n === 1 && len === 1){
        // head.next = null
        return null;
    }
    else if(n === 1 && len > 1){
      list[len - n - 1].next = null;    
    }else if(n === len){
        head = head.next;        
    } else{
    list[len - n - 1].next = list[len - n + 1];
    }
    return head
};
