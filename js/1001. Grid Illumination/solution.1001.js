/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
const gridIllumination = function(N, lamps, queries) {
  const m = new Map();
  const key = ([i,j]) => `${i},${j}`;

  lamps = lamps.map(([i, j], idx) => {
    m.set(key([i,j]),idx);
    return [i, j, j - i, j + i]}
  );
  

  const checkCell = ([i, j]) =>
    lamps.some(
      ([x, y, b1, b2]) => i === x || j === y || j === i + b1 || j === -i + b2,
    )
      ? 1
      : 0;

  const checkLamp = ([i, j]) => {
    // const index = lamps.findIndex(([x, y]) => x === i && y === j);
    const index = m.get(key([i,j]));
    
    if (index !== undefined) {
      lamps.splice(index, 1);
      m.delete(key([i,j]));
    }
  };

  return queries.map(([i,j]) => {
    const ans = checkCell([i,j]);
    checkLamp([i,j]);
    checkLamp([i+1,j]);
    checkLamp([i+1,j+1]);
    checkLamp([i+1,j-1]);
    checkLamp([i,j-1]);
    checkLamp([i,j+1]);
    checkLamp([i-1,j]);
    checkLamp([i-1,j+1]);
    checkLamp([i-1,j-1]);
    return ans;
  });
};

module.exports = gridIllumination;
