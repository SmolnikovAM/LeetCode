/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = (s, words) => {
  if (!s || !words.length) return [];
  const wordLen = words[0].length;
  const windowLen = wordLen * words.length;

  const dict = new Map();

  words.forEach(w => {
    if (dict.has(w)) {
      const newVal = dict.get(w) + 1;
      dict.set(w, newVal);
    } else {
      dict.set(w, 1);
    }
  });

  let first = 0;
  let last = wordLen * words.length - 1;

  const ans = [];
  while (last < s.length) {
    const dictCopy = new Map(dict);
    console.log(dict);
    let iter = first;
    let flag = true;
    while (iter <= last) {
      const word = s.slice(iter, iter + wordLen);
      if (dictCopy.has(word)) {
        const newVal = dictCopy.get(word) - 1;
        console.log(word, newVal);
        if (newVal < 0) {
          flag = false;
          break;
        }
        dictCopy.set(word, newVal);
      } else {
        flag = false;
        break;
      }
      iter += wordLen;
    }

    if (flag) ans.push(first);
    first += 1;
    last += 1;
  }

  return ans;
};

/*
var findSubstring = function(s, words) {
  const dict = {};
  let len = 0;
  if (s === '' || words.length === 0) return [];
  words.forEach(word => {
    len += word.length;
    if (dict[word]) {
      dict[word].count += 1;
    } else {
      const length = word.length;
      dict[word] = {count: 1, pos: []};
      let idx = s.indexOf(word);
      while (idx !== -1) {
        dict[word].pos.push({left: idx, right: idx + word.length - 1});
        idx = s.indexOf(word, idx + 1);
      }
    }
  });

  if (Object.keys(dict).some(key => dict[key].pos.length === 0)) return [];

  let first = 0;
  let last = first + len - 1;
  const ans = [];

  while (last < s.length) {
    const copy = s.slice(first, last);
    let flag = true;
    const data = Object.entries(dict).map(([key, {pos, count}]) => {
      const pos1 = pos.filter(
        ({left, right}) => left >= first && right <= last,
      );
      if (count > pos1.length) flag = false;
      return {key, count, pos: pos1};
    });

    if (flag) {
      console.log(first, last, JSON.stringify(data));
      
      //      data.reduce((a,{pos}) =>[...a,...pos] ,[]).sort((a,b) => a.left - b.left);
      ans.push(first);
    }

    first += 1;
    last += 1;
  }
  return ans;
};
*/
module.exports = findSubstring;
