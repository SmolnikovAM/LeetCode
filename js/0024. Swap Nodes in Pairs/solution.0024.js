var swapPairs = function(head) {
    const result = { next: head };
    let before = result;
    let first = head;
    
    while(first && first.next){     // 1 -> 2 -> 3  -> 4
        before.next = first.next;        // 1 -> 3
        first.next =  first.next.next;   // 2 -> 4
        before.next.next = first;        // 3 -> 2
        before = first;                  // before = 2
        first = first.next;              // first next
    }
    
    return result.next;
};
