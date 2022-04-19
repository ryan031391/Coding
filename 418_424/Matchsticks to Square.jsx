// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Return true if you can make this square and false otherwise.

 

// Example 1:


// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:

// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
 

// Constraints:

// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108



// # @param {Integer[]} matchsticks
// # @return {Boolean}
// def makesquare(matchsticks)
//   a, r = matchsticks.sum.divmod(4) # square side, reminder
//   return false unless r == 0
//   matchsticks.sort!
//   dfs(matchsticks, a, a, a, a)
// end

// def dfs(arr, a, b, c, d)
//   return true if arr.empty?
//   x = arr.last
//   arr = arr[0..-2]
//   a >= x && dfs(arr, a - x, b, c, d) ||
//     b >= x && dfs(arr, a, b - x, c, d) ||
//       c >= x && dfs(arr, a, b, c - x, d) ||
//         d >= x && dfs(arr, a, b, c, d - x)
// end