/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  time.sort((a, b) => a - b);
  let cnt = 0;
  let acc = Array.from({length: 60}).map(() => 0);
  for (let i = 0; i < time.length; i += 1) {
    if (time[i] % 60 === 0) cnt++;
    else acc[time[i] % 60] += 1;
  }

  cnt = (cnt * (cnt - 1)) / 2;

  for (let i = 1; i <= 29; i += 1) {
    cnt += acc[i] * acc[60 - i];
  }

  cnt += (acc[30] * (acc[30] - 1)) / 2;

  return cnt;
};


module.exports = numPairsDivisibleBy60;
