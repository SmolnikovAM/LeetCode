/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(block, source, target) {
  const SetCoords = class extends Set {
    add(cell) {
      const s = cell.toString();
      return super.add.apply(this, [s]);
    }
    has(cell) {
      const s = cell.toString();
      return super.has.apply(this, [s]);
    }
    delete(cell) {
      const s = cell.toString();
      return super.delete.apply(this, [s]);
    }
  };

  const blocked = new SetCoords(block);
  let length = block.length;
  let maxx = 0;
  let maxy = 0;
  let minx = 10 ** 6;
  let miny = 10 ** 6;
  block.forEach(cell => {
    const [x, y] = cell;
    if (
      [
        [x, y + 1],
        [x, y - 1],
        [x + 1, y],
        [x - 1, y],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y - 1],
        [x - 1, y + 11],
      ].every(
        c =>
          !blocked.has(c) &&
          x > 0 &&
          y < 10 ** 6 - 1 &&
          y > 0 &&
          x < 10 ** 6 - 1,
      )
    ) {
      length -= 1;
      blocked.delete(cell);
    } else {
      maxx = Math.max(x, maxx);
      maxy = Math.max(y, maxy);
      minx = Math.min(x, minx);
      miny = Math.min(y, miny);
    }
  });
  const maxCnt = length ** 2 + 2;

  const review = (s, [tx, ty]) => {
    const seen = new SetCoords();
    const stack = [s];
    for (let i = 0; i < maxCnt; i += 1) {
      const [sx, sy] = stack.pop();
      seen.add([sx, sy]);
      if (tx === sx && ty === sy) return true;
      if (sx > maxx || sy > maxy || sx < minx || sy < miny) return true;
      [[sx, sy + 1], [sx, sy - 1], [sx + 1, sy], [sx - 1, sy]].forEach(
        ([x, y]) => {
          if (x < 0 || y < 0 || x >= 10 ** 6 || y >= 10 ** 6) return;
          if (seen.has([x, y])) return;
          if (blocked.has([x, y])) return;
          stack.push([x, y]);
        },
      );
      if (stack.length === 0) return false;
    }
    return true;
  };

  return review(source, target) && review(target, source);
};
