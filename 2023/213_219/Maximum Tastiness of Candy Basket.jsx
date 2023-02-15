// You are given an array of positive integers price where price[i] denotes the price of the ith candy and a positive integer k.

// The store sells baskets of k distinct candies. The tastiness of a candy basket is the smallest absolute difference of the prices of any two candies in the basket.

// Return the maximum tastiness of a candy basket.

 

// Example 1:

// Input: price = [13,5,1,8,21,2], k = 3
// Output: 8
// Explanation: Choose the candies with the prices [13,5,21].
// The tastiness of the candy basket is: min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8.
// It can be proven that 8 is the maximum tastiness that can be achieved.
// Example 2:

// Input: price = [1,3,1], k = 2
// Output: 2
// Explanation: Choose the candies with the prices [1,3].
// The tastiness of the candy basket is: min(|1 - 3|) = min(2) = 2.
// It can be proven that 2 is the maximum tastiness that can be achieved.
// Example 3:

// Input: price = [7,7,7,7], k = 2
// Output: 0
// Explanation: Choosing any two distinct candies from the candies we have will result in a tastiness of 0.
 

// Constraints:

// 2 <= k <= price.length <= 105
// 1 <= price[i] <= 109


// # @param {Integer[]} price
// # @param {Integer} k
// # @return {Integer}
// def maximum_tastiness(price, k)
    
//     sorted_price = price.sort()
//     head = sorted_price[0]
//     tail = sorted_price[-1]
//     left = 0
//     right = tail - head
//     result = 0
//     while left <= right
//         mid = (left + right) / 2
//         if helper(sorted_price, k, mid)
//             if mid > result
//                 result = mid
//             end
//             left = mid + 1
//         else
//             right = mid - 1
//         end
//     end
//     result 
// end

// def helper(price, k, tastiness)
//     arr = [price[0]]
//     prev = arr[-1]
//     for i in (1...price.length)
//         num = price[i] 
//         if num - prev >= tastiness
//             arr.push(num)
//             prev = num
//         end
//     end
//     if arr.length >= k
//         return true
//     end
//     return false
// end