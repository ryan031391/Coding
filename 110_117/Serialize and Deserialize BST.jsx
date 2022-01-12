// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    let result = [];
    
    function traverse(node) {
        if(!node) {
            result.push('X');
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result.join('.');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
    let queue = data.split('.');
    let idx = 0;
    function traverse() {
        let currNode = queue[idx];
        idx++;
        if(currNode === 'X') return null;
        
        let tree = new TreeNode(+currNode);
        tree.left = traverse();
        tree.right = traverse();
        return tree;
    }
    return traverse(0)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */