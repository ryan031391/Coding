// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

 

// Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
 

// Constraints:

// 1 <= n <= 231 - 1


// # @param {Integer} n
// # @return {Integer}
// def arrange_coins(n)
//     # result = 1
//     # sum = 0
//     # while sum < n
//     #     sum += result
//     #     if sum < n
//     #         result += 1
//     #     elsif sum > n
//     #         result -= 1
//     #     end
//     # end
//     # return result
    
//     ((Math.sqrt(1 + 4*2*n) - 1)/2).to_i
// end