// You are painting a fence of n posts with k different colors. You must paint the posts following these rules:

// Every post must be painted exactly one color.
// There cannot be three or more consecutive posts with the same color.
// Given the two integers n and k, return the number of ways you can paint the fence.

 

// Example 1:


// Input: n = 3, k = 2
// Output: 6
// Explanation: All the possibilities are shown.
// Note that painting all the posts red or all the posts green is invalid because there cannot be three posts in a row with the same color.
// Example 2:

// Input: n = 1, k = 1
// Output: 1
// Example 3:

// Input: n = 7, k = 2
// Output: 42
 

// Constraints:

// 1 <= n <= 50
// 1 <= k <= 105
// The testcases are generated such that the answer is in the range [0, 231 - 1] for the given n and k.



// # @param {Integer} n
// # @param {Integer} k
// # @return {Integer}
// def num_ways(n, k)
//   return 0 if n == 0 || k == 0
//   return k if n == 1
//   same, diff = [], []
//   same[0] = same[1] = k
//   diff[0], diff[1] = k, k*(k-1)
//   (2...n).each { |i|
//     same[i] = diff[i-1]
//     diff[i] = (same[i-1] + diff[i-1]) * (k-1)
//   }
//   same[n-1] + diff[n-1]
// end
