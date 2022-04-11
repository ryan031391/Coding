// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.



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
// def count_nodes(root)
//     depth = depth(root)
//     if depth == 0
//         return 0
//     else
//         return 2**(depth-1)-1+count(root, depth)
//     end
// end

// def depth(root)
//     if root == nil
//         return 0
//     end
//     return depth(root.left)+1
// end

// def count(root, depth)
//     if depth == 1
//         if root == nil
//             return 0
//         else
//             return 1
//         end
//     else
//         left = count(root.left, depth-1)
//         right = count(root.right, depth-1)
//         return left + right
//     end
// end