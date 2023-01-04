// The factorial of a positive integer n is the product of all positive integers less than or equal to n.

// For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
// We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', and subtract '-' in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.

// Given an integer n, return the clumsy factorial of n.

 

// Example 1:

// Input: n = 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1
// Example 2:

// Input: n = 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
 


// def clumsy(n)
//     hash = Hash.new(0)
//     hash[0] = 1
//     hash[1] = 1
//     hash[2] = 2
//     hash[3] = 6
//     hash[4] = 7
//     if n < 5 
//         return hash[n]
//     else
//         return (n-1)*2-((n/4)-1)*4-hash[n%4]
//     end
// end