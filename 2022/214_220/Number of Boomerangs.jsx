// You are given n points in the plane that are all distinct, where points[i] = [xi, yi]. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

// Return the number of boomerangs.

 

// Example 1:

// Input: points = [[0,0],[1,0],[2,0]]
// Output: 2
// Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: 2
// Example 3:

// Input: points = [[1,1]]
// Output: 0



// # @param {Integer[][]} points
// # @return {Integer}
// def number_of_boomerangs(points)
//     i = 0
//     result = 0
//     while i < points.length
//         hash = Hash.new()
//         point = points[i]
//         j = 0
//         while j < points.length
//             point1 = points[j]
//             dist = (point[0] - point1[0]) ** 2 + (point[1] - point1[1]) ** 2
//             if !hash[dist]
//                 hash[dist] = 1
//             else
//                 result += hash[dist] * 2
//                 hash[dist] += 1
//             end
//             j += 1
//         end
//         i += 1
//     end
//     return result
// end