// You are given m arrays, where each array is sorted in ascending order.

// You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.

// Return the maximum distance.

 

// Example 1:

// Input: arrays = [[1,2,3],[4,5],[1,2,3]]
// Output: 4
// Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
// Example 2:

// Input: arrays = [[1],[1]]
// Output: 0
 

// Constraints:

// m == arrays.length
// 2 <= m <= 105
// 1 <= arrays[i].length <= 500
// -104 <= arrays[i][j] <= 104
// arrays[i] is sorted in ascending order.
// There will be at most 105 integers in all the arrays.


// # @param {Integer[][]} arrays
// # @return {Integer}
// def max_distance(arrays)
//     min = nil
//     max = nil
//     arrays.each_with_index do |ele, i|
//         cur_min = ele[0] 
//         cur_max = ele[-1]
//         if !min || min[0] > cur_min
//             min = [cur_min, [i]]
//         elsif min[0] == cur_min
//             min[1].push(i)
//         end
//         if !max || max[0] < cur_max
//             max = [cur_max, [i]]
//         elsif max[0] == cur_max
//             max[1].push(i)
//         end
//     end
//     if max[1].length != 1 || min[1].length != 1 || max[1][0] != min[1][0]
//         return max[0] - min[0]
//     end
//     sec_min = nil  
//     sec_max = nil   
//     arrays.each_with_index do |ele, i|
//         cur_min = ele[0] 
//         cur_max = ele[-1]
//         if cur_min != min[0]
//             if !sec_min || sec_min[0] > cur_min
//                 sec_min = [cur_min, [i]]
//             elsif sec_min[0] == cur_min
//                 sec_min[1].push(i)
//             end
//         end
//         if cur_max != max[0]
//             if !sec_max || sec_max[0] < cur_max
//                 sec_max = [cur_max, [i]]
//             elsif sec_max[0] == cur_max
//                 sec_max[1].push(i)
//             end
//         end
//     end
//     return [max[0]-sec_min[0], sec_max[0]-min[0]].max
// end