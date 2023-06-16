// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

 

// Example 1:

// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#"
// Output: "acz"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of digits and the '#' letter.
// s will be a valid string such that mapping is always possible.



// # @param {String} s
// # @return {String}
// def freq_alphabets(s)
//     nums = ""
//     i = 0
//     num = nil
//     result = ""
//     while i < s.length 
//         char = s[i]
//         if char == "#"
//             num = nums
//             nums = ""
//         else
//             nums += char
//             if nums.length > 2
//                 num = nums[0] 
//                 nums = nums[1..-1]
//             end
//         end
//         if num
//             result += (num.to_i+96).chr
//             num = nil
//         end
//         i += 1
//     end
//     nums.each_char do |char|
//         result += (char.to_i+96).chr
//     end
//     return result
// end