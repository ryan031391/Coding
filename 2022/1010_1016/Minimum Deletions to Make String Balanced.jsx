// You are given a string s consisting only of characters 'a' and 'b'​​​​.

// You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

// Return the minimum number of deletions needed to make s balanced.

 

// Example 1:

// Input: s = "aababbab"
// Output: 2
// Explanation: You can either:
// Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
// Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
// Example 2:

// Input: s = "bbaaaaabb"
// Output: 2
// Explanation: The only solution is to delete the first two characters.
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is 'a' or 'b'​​.


// # @param {String} s
// # @return {Integer}
// def minimum_deletions(s)
//     arr_a = [0]
//     for i in (0...s.length)
//         if s[i] != 'a'
//             arr_a.push(arr_a[-1]+1)
//         else
//             arr_a.push(arr_a[-1])
//         end
//     end
//     # arr_b = [0]
//     min = arr_a[-1]
//     acount = 0
//     i = s.length - 1
//     while i >= 0
//         if s[i] != 'b'
//             acount += 1
//         end    
//         min = [arr_a[i]+acount, min].min()
//         i -= 1
//     end
//     # min = arr_a[-1]+arr_b[0]
//     # n = arr_a.length-1
//     # for i in (0...arr_a.length)
//     #     temp = arr_a[i]+arr_b[n]
//     #     if temp < min
//     #         min = temp
//     #     end
//     #     n -= 1
//     # end
//     return min
// end