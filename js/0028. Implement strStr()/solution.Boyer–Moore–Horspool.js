/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    
    const lenH = haystack.length;
    const lenN = needle.length;
    
    const t = Object.create(null);
    
    for(let i = 0; i < needle.length; i += 1)
         t[needle[i]] = lenN - 1 - i;
    
    let skip = 0;
    while(lenH - skip >= lenN){
        let i = lenN - 1
        while(skip + i < lenH && haystack[skip + i] === needle[i]){
            if (i === 0) return skip
            i -= 1
        }
        const tt = t[haystack[skip + lenN - 1]];
        skip = skip + Math.max(1,( tt === undefined ? lenN : tt));
    }
    
    return -1;
    
};
