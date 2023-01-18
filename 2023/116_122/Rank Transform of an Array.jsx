// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
 

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]
 

// Constraints:

// 0 <= arr.length <= 105
// -109 <= arr[i] <= 109
// Accepted
// 55,073
// Submissions
// 94,231



// # @param {Integer[]} arr
// # @return {Integer[]}
// def array_rank_transform(arr)
//     arr1 = []
//     arr.each_with_index do |ele, i|
//         arr1.push([ele, i])
//     end
//     arr1 = arr1.sort()
//     result = Array.new(arr.length, nil)
//     count = 0
//     arr1.each_with_index do |ele, i|
//         if i == 0 || ele[0] != arr1[i-1][0]
//             result[ele[1]] = i + 1 - count
//         else
//             result[ele[1]] = result[arr1[i-1][1]]
//             count += 1
//         end
//     end
//     return result
// end