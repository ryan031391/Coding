// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

// As the answer can be very large, return it modulo 109 + 7.

 

// Example 1:

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation: 
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
// Example 2:

// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation: 
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.
// Example 3:

// Input: arr = [2,1,3], target = 6
// Output: 1
// Explanation: (1, 2, 3) occured one time in the array so we return 1.
 

// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300



// # @param {Integer[]} arr
// # @param {Integer} target
// # @return {Integer}
// def three_sum_multi(arr, target)
//   result = 0
//   arr.sort!

//   arr.count.times do |i|
//     t = target - arr[i]
//     j = i + 1
//     k = arr.count - 1

//     while j < k
//       if arr[j] + arr[k] < t
//         j += 1
//       elsif arr[j] + arr[k] > t
//         k -= 1
//       elsif arr[j] != arr[k]
//         left = right = 1
        
//         while j + 1 < k && arr[j] == arr[j+1]
//           left += 1
//           j += 1
//         end
        
//         while k - 1 > j && arr[k] == arr[k-1]
//           right += 1
//           k -= 1
//         end

//         result += left*right
//         result %= MOD
//         j += 1
//         k -= 1
//       else
//         result += (k - j + 1)*(k - j)/2
//         result %= 10**9 + 7
//         break
//       end
//     end
//   end
  
//   result
// end
