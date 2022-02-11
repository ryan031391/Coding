// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [directioni, amounti]:

// directioni can be 0 (for left shift) or 1 (for right shift).
// amounti is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

 

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"



// # @param {String} s
// # @param {Integer[][]} shift
// # @return {String}
// def string_shift(s, shift)
//     count = 0
//     result = s
//     shift.each do |ele|
//        if ele[0] == 0
//            count += ele[1]
//        else
//            count -= ele[1]
//        end
//     end
//     count %= s.length
//     if count > 0
//         p count
//         p [result[count..-1], result[0...count]]
//         result = result[count..-1] + result[0...count]
//     elsif count < 0
//         count = count.abs
//         result = result[result.length-count..-1] + result[0...result.length-count]
//     end
//     return result
// end