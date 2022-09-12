// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

// Example 1:


// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]
// Example 2:


// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]


// # @param {Integer[][]} mat
// # @param {Integer} r
// # @param {Integer} c
// # @return {Integer[][]}
// def matrix_reshape(mat, r, c)
//     if r * c != mat[0].length * mat.length || (r == mat.length && c == mat[0].length)
//         return mat
//     end
//     arr = Array.new(r) {|ele| ele = Array.new(c, 0)}
//     i = 0
//     i1 = 0
//     j1 = 0
//     while i < mat.length
//         j = 0
//         while j < mat[0].length 
//             if j1 >= c
//                 j1 = 0
//                 i1 += 1
//             end
//             arr[i1][j1] = mat[i][j]  
//             j += 1
//             j1 += 1
//         end
//         i += 1
//     end
//     return arr
// end