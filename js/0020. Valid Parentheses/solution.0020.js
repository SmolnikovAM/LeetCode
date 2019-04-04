/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    const len = s.length;
    
    for(let i = 0; i < len; i += 1){
        const simbol = s[i];
        if(simbol === '(' || simbol === '[' || simbol === '{'){
            arr.push(simbol)
        }else{
            const simbolFirst = arr.pop();
            if(simbol === ']' && simbolFirst === '[') continue;
            if(simbol === ')' && simbolFirst === '(') continue;
            if(simbol === '}' && simbolFirst === '{') continue;
            return false;            
        }
            
    }
    return Boolean(!arr.length);
};
