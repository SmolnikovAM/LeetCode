/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    
    let lenH = haystack.length;
    let lenN = needle.length;
    let i = 0;
    
    for(let i = 0; i < lenH; i += 1){
       if (haystack.slice(i, i + lenN) === needle) return i;
    }
    
    return -1
}
