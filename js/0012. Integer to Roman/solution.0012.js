/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const intTable = {};
  intTable[0] = '';
  intTable[1] = 'I';
  intTable[2] = 'II';
  intTable[3] = 'III';
  intTable[4] = 'IV';
  intTable[5] = 'V';
  intTable[6] = 'VI';
  intTable[7] = 'VII';
  intTable[8] = 'VIII';
  intTable[9] = 'IX';
  intTable[10] = 'X';
  intTable[20] = 'XX';
  intTable[30] = 'XXX';
  intTable[40] = 'XL';
  intTable[50] = 'L';
  intTable[60] = 'LX';
  intTable[70] = 'LXX';
  intTable[80] = 'LXXX';
  intTable[90] = 'XC';
  intTable[100] = 'C';
  intTable[200] = 'CC';
  intTable[300] = 'CCC';
  intTable[400] = 'CD';
  intTable[500] = 'D';
  intTable[600] = 'DC';
  intTable[700] = 'DCC';
  intTable[800] = 'DCCC';
  intTable[900] = 'CM';
  intTable[1000] = 'M';
  intTable[2000] = 'MM';
  intTable[3000] = 'MMM';

  let roman = '';

  if (intTable[num]) return intTable[num];

  mult = 10;
  while (num > 0) {
    const nat = num % mult;
    roman = `${intTable[nat]}${roman}`;
    mult *= 10;
    num = num - nat;
  }

  return roman;
};

module.exports = intToRoman;
