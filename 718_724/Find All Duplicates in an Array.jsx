// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.


// def find_duplicates(array)
//     0.upto(array.size - 1) do |i|
//         if array[i] != i + 1 and
//            array[array[i] - 1] != array[i]
//             temp = array[i]
//             array[i] = array[array[i] - 1]
//             array[temp - 1] = temp
//             redo
//         end
//     end
//     result = Array.new
//     0.upto(array.size - 1) do |i|
//         if array[i] != i + 1
//             result << array[i]
//         end
//     end
//     result
// end