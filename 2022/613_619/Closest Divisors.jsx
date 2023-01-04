// Given an integer num, find the closest two integers in absolute difference whose product equals num + 1 or num + 2.

// Return the two integers in any order.

 

// Example 1:

// Input: num = 8
// Output: [3,3]
// Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.
// Example 2:

// Input: num = 123
// Output: [5,25]
// Example 3:

// Input: num = 999
// Output: [40,25]
 

// Constraints:

// 1 <= num <= 10^9




// require 'prime'

// # @param {Integer} num
// # @return {Integer[]}
// def closest_divisors(num)
//     [f(num + 1), f(num + 2)].min[1..2]
// end

// def f(n)
//     bestdiff = n - 1
//     bestx = 1
//     each_divisor(n) do |x|
//         d = n / x - x
//         if d >= 0 && d < bestdiff
//             bestdiff = d 
//             bestx = x
//         end
//     end
//     [bestdiff, bestx, n / bestx]
// end

// def each_divisor(num)
//     prims, pows = num.prime_division.transpose
//     n = prims.size
//     a = Array.new(n, 0)
//     loop do
//         yield prims.zip(a).map{|p,n| p**n}.reduce(1, :*)
//         t = 0
//         while t < n && a[t] == pows[t]
//             a[t] = 0
//             t += 1 
//         end
//         break if t == n
//         a[t] += 1
//     end
// end
