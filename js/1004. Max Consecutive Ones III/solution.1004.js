/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let len = A.length;
    let i = len - 1; 
    while(len--){
        K -= 1 - A[len];
        if(K < 0) K += 1 - A[i--];
    }
    return i - len;
};
