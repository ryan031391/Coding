// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.



// # @param {String[]} strs
// # @return {String}
// def longest_common_prefix(strs)
//     res = ""
//     i = 0
//     while i < strs[0].length
//         letter = strs[0][i]
//         strs.each do |ele|
//             if i >= ele.length || ele[i] != letter
//                 return res
//             end
//         end
//         res += letter
//         i += 1
//     end
//     return res
// end