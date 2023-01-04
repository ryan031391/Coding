// You are given a string s of lowercase English letters and an integer array shifts of the same length.

// Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

// Return the final string after all such shifts to s are applied.

 

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.
// Example 2:

// Input: s = "aaa", shifts = [1,2,3]
// Output: "gfd"
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// shifts.length == s.length
// 0 <= shifts[i] <= 109


// # @param {String} s
// # @param {Integer[]} shifts
// # @return {String}
// def shifting_letters(s, shifts)
//     str = s
//     for i in (0...shifts.length)
//         if i != shifts.length - 1
//             str = shift(str[0..i], shifts[i]) + str[i+1..-1]
//         else
//             str = shift(str[0..i], shifts[i])
//         end
//     end
//     return str
// end

// def shift(s, dist)
//     arr = []
//     s.each_char do |char|
//         arr.push(((char.ord + dist%26)-97)%26 + 97)
//     end
//     return arr. pack('c*')  
// end