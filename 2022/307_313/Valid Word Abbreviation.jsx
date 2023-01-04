// A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

// For example, a string such as "substitution" could be abbreviated as (but not limited to):

// "s10n" ("s ubstitutio n")
// "sub4u4" ("sub stit u tion")
// "12" ("substitution")
// "su3i1u2on" ("su bst i t u ti on")
// "substitution" (no substrings replaced)
// The following are not valid abbreviations:

// "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
// "s010n" (has leading zeros)
// "s0ubstitution" (replaces an empty substring)
// Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

// A substring is a contiguous non-empty sequence of characters within a string.

 

// Example 1:

// Input: word = "internationalization", abbr = "i12iz4n"
// Output: true
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
// Example 2:

// Input: word = "apple", abbr = "a2e"
// Output: false
// Explanation: The word "apple" cannot be abbreviated as "a2e".
 

// Constraints:

// 1 <= word.length <= 20
// word consists of only lowercase English letters.
// 1 <= abbr.length <= 10
// abbr consists of lowercase English letters and digits.
// All the integers in abbr will fit in a 32-bit integer.



// # @param {String} word
// # @param {String} abbr
// # @return {Boolean}
// def valid_word_abbreviation(word, abbr)
//     if abbr.length > word.length
//         return false
//     end
    
//     index = 0
//     count = 0
//     flag = true
//     if word.length == 1
//         flag = false
//         if word == abbr or abbr == "1"
//             flag = true
//         end
//         return flag
//     end   

//     for i in 0...abbr.length
//         a = abbr[i]
//         current = a.to_i
//         if a.ord >= 48 and a.ord <= 57
//             if a.ord == 48 and count == 0
//                 return false
//             end
//             count = 10 * count + current 
//         else
//             while count > 0
//                 count -= 1
//                 index += 1
//             end
//             if a != word[index] 
//                 flag = false
//                 break
//             else
//                 index += 1
//             end
//         end
//     end
    
//     flag = false if index < word.length - 1
//     if count > 0
//         if index == word.length - count
//             return true
//         else
//             return false
//         end
//     end
//     flag
        
// end
