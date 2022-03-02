// Given the root of a binary tree, return the sum of all left leaves.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0



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
// # @return {Integer}
// def sum_of_left_leaves(root, is_left = false)
//   result = 0
  
//   if root && root.left.nil? && root.right.nil?
//     return root.val if is_left
//   elsif !root.nil?
//     result += sum_of_left_leaves(root.left, true)
//     result += sum_of_left_leaves(root.right)  
//   end

//   result
// end