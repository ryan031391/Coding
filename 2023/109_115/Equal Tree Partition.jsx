// Given the root of a binary tree, return true if you can partition the tree into two trees with equal sums of values after removing exactly one edge on the original tree.

 

// Example 1:


// Input: root = [5,10,10,null,null,2,3]
// Output: true
// Example 2:


// Input: root = [1,2,10,null,null,2,20]
// Output: false
// Explanation: You cannot split the tree into two trees with equal sums after removing exactly one edge on the tree.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105



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
// # @return {Boolean}
// def check_equal_tree(root)
//     if root == nil
//         return false 
//     end
//     sum = get_sum(root)[-1]
//     arr = get_sum(root)[0]
//     arr.pop()
//     if sum % 2 == 1
//         return false
//     end
//     target = sum / 2
//     if arr.include?(target)
//         return true
//     else
//         return false
//     end
// end

// def get_sum(root)
//     if root.left != nil
//         left = get_sum(root.left)
//     else
//         left = [[], 0]
//     end
//     if root.right != nil
//         right = get_sum(root.right)
//     else
//         right = [[], 0]
//     end
//     sum = left[-1] + right[-1] + root.val
//     arr = left[0].concat(right[0]).push(sum)
//     return [arr, sum]
// end