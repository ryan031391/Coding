// You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

// Return the number of good leaf node pairs in the tree.

 

// Example 1:


// Input: root = [1,2,3,null,4], distance = 3
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
// Example 2:


// Input: root = [1,2,3,4,5,6,7], distance = 3
// Output: 2
// Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
// Example 3:

// Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
// Output: 1
// Explanation: The only good pair is [2,5].
 

// Constraints:

// The number of nodes in the tree is in the range [1, 210].
// 1 <= Node.val <= 100
// 1 <= distance <= 10



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
// # @param {Integer} distance
// # @return {Integer}


// def count_pairs(root, distance)
//   @result = 0
  
//   dfs(root, distance)
  
//   @result
// end

// def dfs(node, distance)
//   if node.left == nil && node.right == nil
//     return [0]
//   end

//   array = []
  
//   l_array = []
//   r_array = []
//   l_array = dfs(node.left, distance) if node.left
//   r_array = dfs(node.right, distance) if node.right
  
//   for i in 0..(l_array.size - 1) do
//     for j in 0..(r_array.size - 1) do
//       if l_array[i] + 1 + r_array[j] + 1 <= distance
//         @result += 1
//       end
//     end
//   end
  
//   array = (l_array + r_array).map { |el| el + 1 }

//   array
// end