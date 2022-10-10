// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.



// # @param {Integer} n
// # @return {Boolean}
// def is_ugly(n)
//     if n == 1 
//         return true
//     end
//     if n == 0
//         return false
//     end
//     if n % 2 == 0
//         return is_ugly(n/2)
//     elsif n % 3 == 0
//         return is_ugly(n/3)
//     elsif n % 5 == 0
//         return is_ugly(n/5)
//     end
//     return false
// end