// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

 

// Example 1:


// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4
// Example 2:

// Input: root = [1], target = 4.428571
// Output: 1



// # Definition for a binary tree node.
// # class TreeNode
// #     attr_accessor :val, :left, :right
// #     def initialize(val = 0, left = nil, right = nil)
// #         @val = val
// #         @left = left
// #         @right = right
// #     end
// # end
// # @param {TreeNode} root
// # @param {Float} target
// # @return {Integer}
// def closest_value(root, target)
//     if root.left == nil && root.right == nil
//         return root.val
//     end
//     left = root.left ? closest_value(root.left, target) : nil
//     right = root.right ? closest_value(root.right, target) : nil
//     if root.val == target
//         return root.val
//     elsif root.val < target
//         if right
//             if (right - target).abs < (root.val - target).abs
//                 return right
//             else
//                 return root.val
//             end
//         else
//             return root.val
//         end
//     else
//         if left 
//             if (left - target).abs < (root.val - target).abs
//                 return left
//             else
//                 return root.val
//             end
//         else
//             return root.val
//         end
//     end
// end