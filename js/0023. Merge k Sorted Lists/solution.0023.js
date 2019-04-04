/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const arr = [];
    
    lists.map(list => {while(list){
        arr.push(list.val);
        list = list.next;
    }})
    if(!arr.length) return null;
    arr.sort((a, b) => a - b);
    
    const arr2 = arr.map(val => ({val, next: null}));
    
    for(let i = 0; i< arr2.length - 1 ; i += 1){
        arr2[i].next=arr2[i + 1]
    }
    
    return arr2[0]
};
