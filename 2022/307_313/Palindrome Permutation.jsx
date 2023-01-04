// Given a string s, return true if a permutation of the string could form a palindrome.

 

// Example 1:

// Input: s = "code"
// Output: false
// Example 2:

// Input: s = "aab"
// Output: true
// Example 3:

// Input: s = "carerac"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5000
// s consists of only lowercase English letters.



// # @param {String} s
// # @return {Boolean}
// def can_permute_palindrome(s)
//     even = s.length.even?
//     hash = Hash.new{|h,k| h[k] = 0}
//     s.each_char do |char|
//         hash[char] += 1
//     end
//     if even
//         hash.each {|k,v| return false if !v.even? }
//     else
//         odd_used = false
//         hash.each do |k,v|
//             if !v.even? && !odd_used
//                 odd_used = true
//             elsif !v.even?
//                 return false
//             end
//         end
//     end
//     true
// end
