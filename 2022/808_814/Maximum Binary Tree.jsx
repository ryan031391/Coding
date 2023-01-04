// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

 

// Example 1:


// Input: nums = [3,2,1,6,0,5]
// Output: [6,3,5,null,2,0,null,null,1]
// Explanation: The recursive calls are as follow:
// - The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
//     - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
//         - Empty array, so no child.
//         - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
//             - Empty array, so no child.
//             - Only one element, so child is a node with value 1.
//     - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
//         - Only one element, so child is a node with value 0.
//         - Empty array, so no child.
// Example 2:


// Input: nums = [3,2,1]
// Output: [3,null,2,null,1]
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// All integers in nums are unique.



// # Definition for a binary tree node.
// # class TreeNode
// #     attr_accessor :val, :left, :right
// #     def initialize(val = 0, left = nil, right = nil)
// #         @val = val
// #         @left = left
// #         @right = right
// #     end
// # end
// # @param {Integer[]} nums
// # @return {TreeNode}
// def construct_maximum_binary_tree(nums)
//     if nums.length == 0
//         return nil
//     elsif nums.length == 1
//         return TreeNode.new(nums[0] )
//     end
//     max = find_max(nums)
//     node = TreeNode.new(max[0])
//     node.left = construct_maximum_binary_tree(nums[0...max[1]])
//     node.right = construct_maximum_binary_tree(nums[max[1]+1..-1])
//     return node
// end

// def find_max(arr)
//     max = [arr[0], 0]
//     for i in (0...arr.length)
//         num = arr[i]
//         if num > max[0]
//             max = [num, i]
//         end
//     end
//     return max
// end