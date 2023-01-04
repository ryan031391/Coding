// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


// # @param {Integer[][]} matrix
// # @return {Void} Do not return anything, modify matrix in-place instead.
// def set_zeroes(matrix)
//     i = 0
//     while i < matrix.length
//        j = 0
//        while j < matrix[0].length
//            num = matrix[i][j]
//            if num == 0
//               k = 0
//               while k < matrix[i].length
//                  if matrix[i][k] != 0
//                      matrix[i][k] = false
//                  end
//                  k += 1 
//               end
//               k = 0
//               while k < matrix.length
//                  if matrix[k][j] != 0
//                      matrix[k][j] = false
//                  end
//                  k += 1 
//               end
//            end
//            j += 1
//        end
//        i += 1
//     end
//     i = 0
//     while i < matrix.length
//        j = 0
//        while j < matrix[0].length
//           if !matrix[i][j]
//               matrix[i][j] = 0
//           end
//           j += 1 
//        end
//        i += 1 
//     end
// end