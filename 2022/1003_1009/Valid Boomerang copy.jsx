// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

 

// Example 1:

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: false
 

// Constraints:

// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100



// # @param {Integer[][]} points
// # @return {Boolean}
// def is_boomerang(points)
//     return false if one_point(points)
//     return false if two_points(points)
//     return false if all_on_vertical(points)
//     return false if all_on_horisontal(points)
//     return true if two_on_vertical(points)
//     return true if two_on_horisontal(points)
//     p0,p1,p2 = points
//     x0,y0 = p0
//     x1,y1 = p1
//     x2,y2 = p2
//     a = (y1-y0)/(x1-x0)
//     b = y0 - a*x0
//     a*x2 + b != y2
    
// end
// def one_point(x)
//     x.uniq.size == 1
// end
// def two_points(x)
//     2 == x.uniq.size
// end
// def all_on_vertical(x)
//     x.map(&:first).uniq.size == 1
// end
// def all_on_horisontal(x)
//     x.map(&:last).uniq.size == 1
// end
// def two_on_vertical(x)
//     x.map(&:first).uniq.size == 2
// end
// def two_on_horisontal(x)
//     x.map(&:last).uniq.size == 2
// end