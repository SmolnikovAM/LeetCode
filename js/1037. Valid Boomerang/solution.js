/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  const area2x = Math.abs((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3));
  return area2x > Number.EPSILON;
};
