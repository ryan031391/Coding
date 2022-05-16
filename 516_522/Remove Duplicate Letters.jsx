// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.



// # @param {String} s
// # @return {String}
// def remove_duplicate_letters(s)
//   return "" if s.length == 0

//   cnt = Hash.new { 0 }
//   s.each_char { |c| cnt[c] += 1 }
//   pos = 0
  
//   s.each_char.with_index do |c,i|
//     pos = i if c < s[pos]
//     break if (cnt[c] -= 1) == 0
//   end

//   s[pos] + remove_duplicate_letters(s[pos+1..-1].delete(s[pos]))
// end