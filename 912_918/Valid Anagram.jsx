// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// # @param {String} s
// # @param {String} t
// # @return {Boolean}
// def is_anagram(s, t)
//     s_length = s.length
//     t_length = t.length
//     counter = Hash.new(0)
    
//     return false unless s_length == t_length
    
//     (0...s_length).each do |i|
//         counter[s[i]] += 1
//         counter[t[i]] -= 1
//     end
    
//     counter.each do |k, v|
//         return false unless v == 0
//     end
    
//     true
// end