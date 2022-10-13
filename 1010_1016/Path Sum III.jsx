// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
 

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000


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
// # @param {Integer} target_sum
// # @return {Integer}
// def path_sum(root, target_sum)
//     return recur(root, [], target_sum)
// end

// def recur(root, arr, target_sum)
//     if root == nil
//         return 0 
//     end
//     count = 0
//     arr1 = [root.val]
//     arr.each{|ele| arr1.push(ele+root.val)}
//     arr1.each{|ele| ele == target_sum ? count+=1 : count}
//     return count+recur(root.left, arr1, target_sum)+recur(root.right, arr1, target_sum)
// end