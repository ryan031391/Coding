// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000



// # @param {Integer[]} arr
// # @return {Boolean}
// def unique_occurrences(arr)
//     hash = Hash.new(0)
//     arr.each do |ele|
//         hash[ele] += 1
//     end
//     hash_1 = Hash.new(nil)
//     hash.each do |k, v|
//         if !hash_1[v] 
//             hash_1[v] = true
//         else
//             return false
//         end
//     end
//     return true
// end