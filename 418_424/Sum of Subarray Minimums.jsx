// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.
// Example 2:

// Input: arr = [11,81,94,43,3]
// Output: 444
 

// Constraints:

// 1 <= arr.length <= 3 * 104
// 1 <= arr[i] <= 3 * 104



// # @param {Integer[]} arr
// # @return {Integer}
// def sum_subarray_mins(arr)
//     res = 0
//     stack = []
//     arr = [0]+arr+[0]
//     for i in 0...arr.size
//         while stack.last && arr[stack[-1]]>arr[i]
//             j = stack.pop
//             k = stack[-1]
//             res += arr[j]*(i-j)*(j-k)
//         end
//         stack<<i
//     end
//     res%(10**9+7)
// end