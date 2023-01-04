// Given an integer n, return the smallest prime palindrome greater than or equal to n.

// An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.

// For example, 2, 3, 5, 7, 11, and 13 are all primes.
// An integer is a palindrome if it reads the same from left to right as it does from right to left.

// For example, 101 and 12321 are palindromes.
// The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].

 

// Example 1:

// Input: n = 6
// Output: 7
// Example 2:

// Input: n = 8
// Output: 11
// Example 3:

// Input: n = 13
// Output: 101
 

// Constraints:

// 1 <= n <= 108



// # @param {Integer} n
// # @return {Integer}
// def prime_palindrome(n)
//     n = first_palindrome(n)
//     n = next_palindrome(n) while !prime?(n)
//     n
// end

// def first_palindrome(n)
//     n += 1 while !palindrome?(n)

//     n
// end

// def next_palindrome(n)
//     n = n.to_s
//     size = n.length
//     middle = size/2
//     size % 2 == 0 ? next_palindrome_even(n, size, middle) : next_palindrome_odd(n, size, middle)
// end
    
// def next_palindrome_even(n, size, middle)   
//     i = 0
//     while i+middle < size
//         if n[middle+i] != "9"
//             n[middle+i] = (n[middle+i].to_i + 1).to_s
//             n[middle-i-1] = n[middle+i]
//             return n.to_i
//         end
//         i += 1
//     end
    
//     n.to_i + 2
// end

// def next_palindrome_odd(n, size, middle)   
//     i = 0
//     while i+middle < size
//         if n[middle+i] != "9"
//             n[middle+i] = (n[middle+i].to_i + 1).to_s
//             n[middle-i] = n[middle+i]
//             j = 0
//             while j < i
//                 n[middle+j] = "0"
//                 n[middle-j] = "0"
//                 j += 1
//             end
            
//             return n.to_i
//         end
//         i += 1
//     end

//     n.to_i + 2
// end

// def palindrome?(n)
//     n = n.to_s
//     l = n.length
//     i = 0
//     while i < l/2
//         return false unless n[i] == n[l-i-1]
//         i += 1
//     end

//     true
// end

// def prime?(n)
//     return false if n < 2 
    
//     r = Math.sqrt(n).to_i
    
//     d = 2
//     while d <= r
//         return false if n % d == 0
//         d += 1
//     end
    
//     true
// end