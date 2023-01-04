// You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

// Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

// We view the projection of these cubes onto the xy, yz, and zx planes.

// A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

// Return the total area of all three projections.

 

// Example 1:


// Input: grid = [[1,2],[3,4]]
// Output: 17
// Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
// Example 2:

// Input: grid = [[2]]
// Output: 5
// Example 3:

// Input: grid = [[1,0],[0,2]]
// Output: 8

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) res++;
    }
    res += Math.max(...grid[i]);
    res += Math.max(...grid.map(r => r[i]));
  }
  return res;
};
