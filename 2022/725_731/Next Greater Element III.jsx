// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1
 

// Constraints:

// 1 <= n <= 231 - 1


// # @param {Integer} n
// # @return {Integer}
// def next_greater_element(n)
//     digits = n.to_s.chars
//     p digits.length
    
//     i = digits.count - 1
//     while i - 1 >= 0 && digits[i] <= digits[i-1]
//     i -= 1
//     end

//     return -1 if i == 0

//     j = i
//     while j + 1 < digits.count && digits[j+1] > digits[i-1]
//     j += 1
//     end

//     digits[i-1], digits[j] = digits[j], digits[i-1]
//     digits[i..-1] = digits[i..-1].reverse

//     result = digits.join.to_i
//     result < 1<<31 ? result : -1
// end
