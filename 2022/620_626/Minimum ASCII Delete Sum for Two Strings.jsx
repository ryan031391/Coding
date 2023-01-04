// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

 

// Example 1:

// Input: s1 = "sea", s2 = "eat"
// Output: 231
// Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
// Deleting "t" from "eat" adds 116 to the sum.
// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
// Example 2:

// Input: s1 = "delete", s2 = "leet"
// Output: 403
// Explanation: Deleting "dee" from "delete" to turn the string into "let",
// adds 100[d] + 101[e] + 101[e] to the sum.
// Deleting "e" from "leet" adds 101[e] to the sum.
// At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
// If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
 

// Constraints:

// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of lowercase English letters.



// # @param {String} s1
// # @param {String} s2
// # @return {Integer}
// def minimum_delete_sum(s1, s2)
//     dp = [[0]]
//     for i in (0...s2.length)
//         dp.push([dp[-1][0]+s2[i].ord])
//     end
//     for i in (0...s1.length)
//         dp[0].push(dp[0][-1]+s1[i].ord) 
//     end
//     for i in (0...s2.length)
//         for j in (0...s1.length)
//             var = (s2[i] == s1[j]) ? 0 : s2[i].ord + s1[j].ord
//             dp[i+1].push([dp[i][j+1]+s2[i].ord, dp[i+1][-1]+s1[j].ord].min())
//             dp[i+1][-1] = [dp[i+1][-1], dp[i][j]+var].min()
//         end
//     end
//     return dp[-1][-1]
// end