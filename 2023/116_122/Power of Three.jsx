// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?



// # @param {Integer} n
// # @return {Boolean}
// def is_power_of_three(n)
//     return false if n == 0 
//     return true if n == 1
//     value = 3
    
//     while value <= n
//         if value == n 
//             return true
//         end
//         value = value*3
//     end
    
//     false
// end