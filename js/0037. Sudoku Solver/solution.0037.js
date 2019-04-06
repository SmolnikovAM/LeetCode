/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const stack = [];
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let mapData;
  mapData = board.map((rowv, x) =>
    rowv.map((_, y) => ({
      _val: null,
      x,
      y,
      m: new Set(arr),
      px: x - (x % 3),
      py: y - (y % 3),
      canBe() {
        const b = new Set();
        for (let d = 0; d < 9; d += 1) {
          const row = this.px + ~~(d / 3);
          const col = this.py + (d % 3);

          if (!(row === x && col === y)) {
            const data = mapData[row][col];
            if (data.val) b.add(data.val);
            else [...data.m].forEach(vv => b.add(vv));
          }
        }
        cb = [...this.m].filter(vv => !b.has(vv));
        if (cb.length === 1) {
          console.log('data', x, y, cb, this.m);
          this.val = cb[0];
          return true;
        }
        return false;
      },
      get val() {
        return this._val;
      },
      set val(v) {
        if (!this.m.has(v)) return;
        this._val = v;
        if (board[x][y] === '.') board[x][y] = v;
        this.m.clear();
        for (let d = 0; d < 9; d += 1) {
          const row = this.px + ~~(d / 3);
          const col = this.py + (d % 3);
          mapData[x][d].m.delete(v);
          mapData[d][y].m.delete(v);
          mapData[row][col].m.delete(v);
        }
      },
    })),
  );

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] !== '.') {
        mapData[i][j].val = board[i][j];
      } else {
        stack.push([i, j]);
      }
    }
  }

  // return;

  let i = stack.length - 1;
  let cnt = 1;
  while (stack.length) {
    if (i < 0 || i >= stack.length) i = stack.length - 1;
    if (cnt++ > 1000) break;
    const [x, y] = stack[i];
    if (mapData[x][y].m.size === 1) {
      mapData[x][y].val = [...mapData[x][y].m][0];
      stack.splice(i, 1);
    } else if (mapData[x][y].canBe()) {
      stack.splice(i, 1);
    }
    i--;
  } // while

  mapData.map(r => r.map(({m, x, y}) => console.log(x, y, m)));
  console.log(board); // sole.log(data.m);
  return board;
};

module.exports = solveSudoku;
