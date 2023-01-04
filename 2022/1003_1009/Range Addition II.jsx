// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

 

// Example 1:


// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
// Example 2:

// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4
// Example 3:

// Input: m = 3, n = 3, ops = []
// Output: 9



// # @param {Integer} m
// # @param {Integer} n
// # @param {Integer[][]} ops
// # @return {Integer}
// def max_count(m, n, ops)
//     return m * n if ops.empty?
//     min_m = 1.0/0
//     min_n = 1.0/0
//     ops.each do |op|
//       min_m = [min_m, op[0]].min
//       min_n = [min_n, op[1]].min
//     end
//     min_m * min_n
// end