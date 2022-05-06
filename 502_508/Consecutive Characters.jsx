// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 


// # @param {String} s
// # @return {Integer}
// def max_power(s)
//     if s.length == 1
//         return 1
//     end
//     count = 1
//     max = 0
//     for i in (0...s.length-1)
//         if s[i] == s[i+1]
//             count += 1
//         else
//             count = 1
//         end
//         if count > max
//             max = count
//         end
//     end
//     return max
// end