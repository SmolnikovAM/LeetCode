var colorBorder = function(grid, r0, c0, color) {
  const rowMax = grid.length;
  const colMax = grid[0].length;
  const stack = [[r0, c0]];
  const border = [];
  const initColor = grid[r0][c0];
  const used = new Map();

  const fourDim = ([r, c]) => [[r, c + 1], [r, c - 1], [r - 1, c], [r + 1, c]];

  const validCell = ([r, c]) => {
    if (r < 0 || r >= rowMax) return false;
    if (c < 0 || c >= colMax) return false;
    return true;
  };

  const check = cell => {
    if (!validCell(cell)) return false;
    const s = cell.toString();
    const m = used.get(s);
    if (m) return false;
    if (grid[cell[0]][cell[1]] !== initColor) return false;
    used.set(s, true);
    return true;
  };

  const isBorder = cell => {
    const [r, c] = cell;
    if (c === colMax - 1) return true;
    if (r === rowMax - 1) return true;
    if (r === 0 || c === 0) return true;
    return fourDim(cell)
      .filter(validCell)
      .some(([rt, ct]) => grid[rt][ct] !== initColor);
  };

  while (stack.length) {
    const cell = stack.pop();
    if (isBorder(cell)) border.push(cell);
    stack.push(...fourDim(cell).filter(check));
  }

  while (border.length) {
    const [r, c] = border.pop();
    grid[r][c] = color;
  }

  return grid;
};
