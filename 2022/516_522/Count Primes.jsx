// Given an integer n, return the number of prime numbers that are strictly less than n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0


// # @param {Integer} n
// # @return {Integer}
// def count_primes(n)
//     # if n == 0 || n == 1 || n == 2
//     #     return 0
//     # end
//     # count = n - 2
//     # hash = Hash.new(nil)
//     # for i in (2..n/2)
//     #     if !hash[i]
//     #         j = 1
//     #         num = i * j
//     #         while num < n
//     #             if !hash[num]
//     #                 hash[num] = true
//     #                 if j != 1
//     #                     count -= 1
//     #                 end
//     #             end
//     #             j += 1
//     #             num = i * j
//     #         end
//     #     end
//     # end
//     # return count 
//     # arr = Array.new(n+1, false)
//     # count = 0
//     # for i in (2...n)
//     #     if !arr[i]
//     #         count += 1
//     #         j = 1
//     #         while i*j < n
//     #             arr[i*j] = true
//     #             j += 1
//     #         end
//     #     end
//     # end
//     # return count
//     mark = [false] * (n + 1)
// 	counter = 0
//     for i in 2...n
//     	next if mark[i] == true
//     	counter += 1
//     	(i * i).step n, i do |j| mark[j] = true end
//     end
//     counter
// end
