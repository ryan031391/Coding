// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  var [[x0, y0], [x1, y1]] = coordinates,
    slope = (y1 - y0) / (x1 - x0);

  return (
    coordinates.every(([x, y], i) => (y - y0) / (x - x0) === slope || !i) ||
    coordinates.every(([x, _]) => x == x0)
  );
};