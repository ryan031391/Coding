// Given a string s, return the length of the longest repeating substrings.If no repeating substring exists, return 0.

 

// Example 1:

// Input: s = "abcd"
// Output: 0
// Explanation: There is no repeating substring.
//     Example 2:

// Input: s = "abbaba"
// Output: 2
// Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
//     Example 3:

// Input: s = "aabcaabdaab"
// Output: 3
// Explanation: The longest repeating substring is "aab", which occurs 3 times.


//     Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase English letters.


// # @param {String} s
// # @return {Integer}
// def longest_repeating_substring(s)
//     hash = Hash.new()
//     s.each_char.with_index do |char, i| 
//         if !hash[char]
//             hash[char] = [i]
//         else
//             hash[char].push(i)
//         end
//     end
//     result = 0
//     hash.each do |k, v|
//         v_hash = Hash.new()
//         if v.length != 1
//             v_hash[k] = v
//         end
//         max = 0
//         while !v_hash.empty?
//             max += 1
//             next_hash = Hash.new()
//             v_hash.each do |k, v|
//                 v.each do |idx|
//                     if idx+k.length < s.length
//                         if !next_hash[k+s[idx+k.length]]
//                             next_hash[k+s[idx+k.length]] = [idx]
//                         else
//                             next_hash[k+s[idx+k.length]].push(idx)
//                         end
//                     end
//                 end
//             end
//             temp = Hash.new()
//             next_hash.each do |k, v|
//                 if v.length > 1
//                     temp[k] = v
//                 end
//             end
//             p temp
//             v_hash = temp
//         end
//         if result < max
//             result = max
//         end
//     end
//     return result
// end