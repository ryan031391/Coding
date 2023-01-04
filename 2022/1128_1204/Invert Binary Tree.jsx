// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100




// class TreeNode
// 	attr_accessor :val, :left, :right
// 	def initialize(val)
// 		@val = val
// 		@left, @right = nil, nil
// 	end
// end

// def run
// 	t1 = TreeNode.new(4)
// 	t1.left = TreeNode.new(2)
// 	t1.right = TreeNode.new(7)
// 	t1.left.left = TreeNode.new(1)
// 	t1.left.right = TreeNode.new(3)
// 	t1.right.left = TreeNode.new(6)
// 	t1.right.right = TreeNode.new(9)
// 	invert_tree(t1)
// end

//  def invert_tree(root)
// 	return nil if root.nil? 
// 	tmp = root.left
// 	root.left = invert_tree(root.right)
// 	root.right = invert_tree(tmp)
// 	return root
//  end
