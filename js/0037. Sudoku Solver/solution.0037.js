/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const history = [];
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
        history.push({
          x,
          y,
          action: 'change val',
          oldVal: this._val,
          newVal: v,
        });
        this._val = v;
        board[x][y] = v;
        history.push({x, y, action: 'clear set', oldVal: new Set(this.m)});
        this.m.clear();
        for (let d = 0; d < 9; d += 1) {
          const row = this.px + ~~(d / 3);
          const col = this.py + (d % 3);
          if (mapData[x][d].m.delete(v))
            history.push({x, y: d, action: 'delete set val', val: v});
          if (mapData[d][y].m.delete(v))
            history.push({x: d, y, action: 'delete set val', val: v});
          if (mapData[row][col].m.delete(v))
            history.push({x: row, y: col, action: 'delete set val', val: v});
        }
      },
    })),
  );

  function undo(save) {
    if (!save) return;
    while (history[history.length - 1] !== save) {
      const {action, x, y, ...data} = history.pop();
      if (action === 'change val') {
        const {oldVal} = data;
        mapData[x][y]._val = oldVal;
        board[x][y] = oldVal || '.';
      }
      if (action === 'clear set') {
        const {oldVal} = data;
        [...oldVal].forEach(vv => mapData[x][y].m.add(vv));
      }
      if (action === 'delete set val') {
        mapData[x][y].m.add(data.val);
      }
    }
  }

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      const data = mapData[i][j];
      if (board[i][j] !== '.') {
        data.val = board[i][j];
      } else {
        stack.push(data);
      }
    }
  }

  let i = stack.length - 1;
  const bt = [];
  let nochange = 0;
  while (stack.length) {
    if (i < 0 || i >= stack.length) i = stack.length - 1;
    const data = stack[i];
    if (data.m.size === 1) {
      data.val = [...data.m][0];
      const [dd] = stack.splice(i, 1);
      if (bt.length) bt[bt.length - 1].arrHistory.push(dd);
    } else if (data.canBe()) {
      const [dd] = stack.splice(i, 1);
      if (bt.length) bt[bt.length - 1].arrHistory.push(dd);
    } else if (nochange > stack.length * 2 + 5) {
      // backteack code
      nochange = 0;
      if (stack.every(s => s.m.size > 0)) {
        stack.sort((a, b) => b.m.size - a.m.size);
        dataBT = stack.pop();
        const save = history[history.length - 1];
        const variants = [...dataBT.m];
        const now = variants.pop();
        dataBT.val = now;
        bt.push({save, variants, dataBT, arrHistory: []});
      } else {
        while (bt.length >= 1 && !bt[bt.length - 1].variants.length) {
          const {dataBT, arrHistory} = bt.pop();
          stack.push(dataBT, ...arrHistory);
        }
        const btItem = bt[bt.length - 1];
        undo(btItem.save);
        stack.push(...btItem.arrHistory);
        btItem.arrHistory.length = 0;
        const now = btItem.variants.pop();
        btItem.dataBT.val = now;
      }
    } else {
      nochange += 1;
    }
    i--;
  } // while

  return board;
};

module.exports = solveSudoku;
