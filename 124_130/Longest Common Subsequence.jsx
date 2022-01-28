// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// # @param {String} text1
// # @param {String} text2
// # @return {Integer}
// def longest_common_subsequence(text1, text2)
//     i = 0
//     mat = []
//     while i <= text1.length
//         j = 0
//         temp = []
//         while j <= text2.length
//             temp.push(0)
//             j += 1
//         end
//         mat.push(temp)
//         i += 1
//     end
//     i = 0
//     while i < text1.length
//         j = 0
//         while j < text2.length
//             if text1[i] == text2[j]
//                 mat[i+1][j+1] = mat[i][j] + 1
//             else
//                 mat[i+1][j+1] = [mat[i][j+1], mat[i+1][j]].max()
//             end
//             j += 1
//         end
//         i += 1
//     end
//     return mat[-1][-1]
// end