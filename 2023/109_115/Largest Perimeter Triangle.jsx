// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Example 2:

// Input: nums = [1,2,1]
// Output: 0
 

// Constraints:

// 3 <= nums.length <= 104
// 1 <= nums[i] <= 106



// # @param {Integer[]} nums
// # @return {Integer}
// def largest_perimeter(a)
//     a = a.sort.reverse
//     for i in 0...a.length-2
//         for j in i+1...a.length-1
//             break if a[j]<a[i]/2
//             for k in j+1...a.length
//                 if a[j]+a[k]>a[i]
//                     return a[i]+a[j]+a[k]
//                 else
//                     break
//                 end
//             end
//         end
//     end
//     return 0
// end