/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === '') return [];
    const len = digits.length;
    const dig = [];
    dig.length = len
      let length = 1;
    for(let i = 0; i <= len; i += 1){
        switch(digits[i]){
            case '2':
                dig[i] = 'abc'
                length *= 3;
                break;
            case '3':
                dig[i] = 'def'
                length *= 3;
                break;
            case '4':
                dig[i] = 'ghi'
                length *= 3;
                break;
            case '5':
                dig[i] = 'jkl'
                length *= 3;
                break;
           case '6':
                length *= 3;
                dig[i] = 'mno'
                break;
            case '7':
                length *= 4;
                dig[i] = 'pqrs'
                break;
            case '8':
                length *= 3;
                dig[i] = 'tuv'
                break;
            case '9':
                length *= 4;
                dig[i] = 'wxyz'
                break;
               
        }
    }
    
    
  const res = [] ;
    //Array.from({length}).fill('');
  for(let i = 0; i < length; i += 1){
      let ii = i;
      dig.forEach(a => {
          const p = ii % a.length;
          res[i] = (res[i]||'') + a[p];
          ii -= p;
          ii /= a.length;
      })      
  }  
return res;
};
