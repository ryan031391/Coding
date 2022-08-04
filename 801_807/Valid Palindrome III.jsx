// Given a string s and an integer k, return true if s is a k-palindrome.

// A string is k-palindrome if it can be transformed into a palindrome by removing at most k characters from it.

 

// Example 1:

// Input: s = "abcdeca", k = 2
// Output: true
// Explanation: Remove 'b' and 'e' characters.
// Example 2:

// Input: s = "abbababa", k = 1
// Output: true
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of only lowercase English letters.
// 1 <= k <= s.length



// # @param {String} s
// # @param {Integer} k
// # @return {Boolean}
// def is_valid_palindrome(s, k)
//   len = s.length
//   memo = Array.new(len) {0}
  
//   tmp = nil
//   prev = nil 
  
//   (len - 2).downto(0).each do |i|
//     prev = 0 
//     (i + 1...len).each do |j|
//       tmp = memo[j]
      
//       if s[i] == s[j]
//         memo[j] = prev 
//       else        
//         memo[j] = 1 + [memo[j], memo[j - 1]].min
//       end
      
//       prev = tmp 
//     end
//   end
//   memo[len - 1] <= k
// end
