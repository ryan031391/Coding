// Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

// The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

// A valid square has four equal sides with positive length and four equal angles (90-degree angles).

 

// Example 1:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true
// Example 2:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false
// Example 3:

// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true
 

// Constraints:

// p1.length == p2.length == p3.length == p4.length == 2
// -104 <= xi, yi <= 104


// # @param {Integer[]} p1
// # @param {Integer[]} p2
// # @param {Integer[]} p3
// # @param {Integer[]} p4
// # @return {Boolean}
// def valid_square(p1, p2, p3, p4)
//     return false if [p1, p2, p3, p4] != [p1, p2, p3, p4].uniq
//     # find all the xs and ys
//     xs = []
//     ys = []
    
//     [p1, p2, p3, p4].each do |pt|
//        xs <<  pt[0]
//        ys <<  pt[1]
//     end
    
//     x_max = xs.max
//     x_min = xs.min
//     y_max = ys.max
//     y_min = ys.min
//     p (y_max - y_min).abs
//     p (x_max - x_min).abs
    
//     return false if (y_max - y_min).abs != (x_max - x_min).abs
    
//     dist = []
//     [p1, p2, p3, p4].each do |pt|
//         x = pt[0]
//         y = pt[1]
//         if y == y_max && x < x_max
//             dist << x_max - x
//         elsif x == x_max && y > y_min
//             dist << y - y_min
//         elsif y == y_min && x > x_min
//             dist << x - x_min
//         elsif x == x_min && y < y_max
//             dist << y_max - y
//         end
//     end
       
//     return false if dist.length != 4
    
//     dist.all? { |e| e == dist[0] }
// end