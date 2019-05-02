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
  };

  const blocked = new SetCoords(block);
  const maxCnt = 200 * 200 + 2;

  const review = (s, [tx, ty]) => {
    const seen = new SetCoords();
    const stack = [s];
    for (let i = 0; i < maxCnt; i += 1) {
      const [sx, sy] = stack.pop();
      seen.add([sx, sy]);
      if (tx === sx && ty === sy) return true;
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
