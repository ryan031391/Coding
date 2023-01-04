// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000


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
// def max_path_sum(root)
//     if root.val == nil
//         return nil
//     end
//     return helper(root)[0]
// end

// def helper(root)
//     if root.left == nil && root.right == nil
//        return [root.val, root.val] 
//     end
//     left = right = nil
//     if root.left != nil
//         left = helper(root.left)
//     end
//     if root.right != nil
//         right = helper(root.right)
//     end
//     if !left
//         max_total = [right[1] + root.val, right[0], root.val].max()
//         max_path = [right[1] + root.val, root.val].max()
//     elsif !right
//         max_total = [left[1] + root.val, left[0], root.val].max()
//         max_path = [left[1] + root.val, root.val].max()        
//     else
//         max_total = [left[1] + right[1] + root.val, left[1] + root.val, right[1] + root.val, left[0], right[0], root.val].max()
//         max_path = [left[1] + root.val, right[1] + root.val, root.val].max()
//     end
//     return [max_total, max_path]
// end