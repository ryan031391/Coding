// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]

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
// # @return {Void} Do not return anything, modify root in-place instead.
// def flatten(root)
//     # if root != nil
//     #     helper(root)
//     # end
//     if root == nil
//        return 
//     end
//     while root.left != nil || root.right != nil
//        if root.left == nil
//            root = root.right
//        elsif root.right == nil
//            root.right = root.left
//            root.left = nil
//            root = root.right
//        else
//            leave = helper(root.left)
//            leave.right = root.right
//            root.right = root.left
//            root.left = nil
//        end
//     end
// end

// def helper(root)
//    while root.left != nil || root.right != nil
//        if root.right == nil
//            root = root.left
//        else
//            root = root.right
//        end
//    end
//    return root
// end

// # def helper(root)
// #    if root.left == nil && root.right == nil
// #       return [root, root]
// #    end
// #    if root.right != nil 
// #        right = helper(root.right)
// #    end
// #    if root.left != nil
// #        left = helper(root.left)
// #    end
// #    root.left = nil
// #    root.right = nil 
// #    if left == nil 
// #       root.right = right[0] 
// #       return [root, right[1]]
// #    elsif right == nil
// #       root.right = left[0]
// #       return [root, left[1]] 
// #    else
// #        root.right = left[0]
// #        left[1].right = right[0]
// #        return [root, right[1]]
// #    end
// # end