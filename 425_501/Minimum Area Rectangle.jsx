// You are given an array of points in the X-Y plane points where points[i] = [xi, yi].

// Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0.

 

// Example 1:


// Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
// Output: 4
// Example 2:


// Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
// Output: 2
 

// Constraints:

// 1 <= points.length <= 500
// points[i].length == 2
// 0 <= xi, yi <= 4 * 104
// All the given points are unique.



// # @param {Integer[][]} points
// # @return {Integer}
// def min_area_rect(points)
//     columns = {}
//     points.each do |x, y|
//         columns[x] ||= []
//         columns[x] << y
//     end
    
//     min = Float::INFINITY
//     last_x = {}
//     columns.keys.sort.each do |x2|
//         column = columns[x2].sort
//         (0...column.length-1).each do |i|
//             (i+1...column.length).each do |j|
//                 y1 = column[i]
//                 y2 = column[j]
//                 if last_x[[y1,y2]]
//                     x1 = last_x[[y1,y2]]
//                     area = (x2 - x1) * (y2 - y1)
//                     min = [min, area].min
//                 end
//                 last_x[[y1,y2]] = x2
//             end
//         end
//     end
    
//     return min == Float::INFINITY ? 0 : min
// end