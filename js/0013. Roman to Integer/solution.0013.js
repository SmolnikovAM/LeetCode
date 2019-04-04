/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman2 = l => {
    switch (l) {
      case 'CM':
        return 900;
      case 'CD':
        return 400;
      case 'XC':
        return 90;
      case 'XL':
        return 40;
      case 'IX':
        return 9;
      case 'IV':
        return 4;
      default:
        return 0;
    }
  };

  const roman = l => {
    switch (l) {
      case 'M':
        return 1000;
      case 'D':
        return 500;
      case 'C':
        return 100;
      case 'L':
        return 50;
      case 'X':
        return 10;
      case 'V':
        return 5;
      case 'I':
        return 1;
      default:
        return 0;
    }
  };

  let i = 0;
  let len = s.length;
  let num = 0;
  while (i < len) {
    const si = s[i];
    if (i < len - 1 && (si === 'I' || si === 'X' || si === 'C')) {
      const n = roman2(si + s[i + 1]);
      if (n) {
        num += n;
        i += 2;
        continue;
      }
    }
    num += roman(si);
    i += 1;
  }
  return num;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = l => {
    switch (l) {
      case 'M':
        return 1000;
      case 'D':
        return 500;
      case 'C':
        return 100;
      case 'L':
        return 50;
      case 'X':
        return 10;
      case 'V':
        return 5;
      case 'I':
        return 1;
      default:
        return 0;
    }
  };

  let i = 0;
  let len = s.length;
  let num = 0;
  let buf = 0;
  while (i < len) {
    const si = roman(s[i]);
    if (buf === 0) {
      buf = si;
    } else {
      if (buf >= si) {
        num += buf;
        buf = si;
      } else {
        num += si - buf;
        buf = 0;
      }
    }
    i += 1;
  }
  num += buf;
  return num;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let i = 0;
    let num = 0;
    let buf = 0;
    let c;
    let si;
    while(c = s[i++]){
      switch(c){
        case 'M': si = 1000; break;
        case 'D': si =  500; break;
        case 'C': si =  100; break;
        case 'L': si = 50; break;
        case 'X': si = 10; break;
        case 'V': si =  5; break;
        case 'I': si = 1; break;

      }
      num += si;
      if(si > buf){
          num = num - buf - buf;
      }
      buf = si;
    }

 return num;
};
