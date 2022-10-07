// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105



// # Definition for a binary tree node.
// # class TreeNode
// #     attr_accessor :val, :left, :right
// #     def initialize(val = 0, left = nil, right = nil)
// #         @val = val
// #         @left = left
// #         @right = right
// #     end
// # end

// def build_array(root)
//     return [] if root==nil
//     return build_array(root.left)+[root.val]+build_array(root.right)
// end


// # @param {TreeNode} root
// # @param {Integer} k
// # @return {Boolean}
// def find_target(root, k)
//     arr = build_array(root)
//     for i in 0...arr.length-1
//         for j in i+1...arr.length
//             return true if arr[i]+arr[j]==k
//         end
//     end
//     return false
// end