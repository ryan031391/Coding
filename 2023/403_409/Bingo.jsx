// #!/bin/ruby

// require 'json'
// require 'stringio'


// #
// # Complete the 'getBingoNumber' function below.
// #
// # The function is expected to return an INTEGER.
// # The function accepts following parameters:
// #  1. 2D_INTEGER_ARRAY mat
// #  2. INTEGER_ARRAY arr
// #

// def getBingoNumber(mat, arr)
//     # Write your code here
//     bucket = Array.new((mat.length*mat[0].length), 0)
//     row_hash = Hash.new(0)
//     col_hash = Hash.new(0)
//     for i in (0...mat.length)
//         for j in (0...mat[0].length)
//             num = mat[i][j]
//             bucket[num-1] = [i, j]     
//         end
//     end
//     arr.each do |ele|
//         pos = bucket[ele-1]
//         row_hash[pos[0]] += 1
//         col_hash[pos[1]] += 1
//         if row_hash[pos[0]] == mat[0].length || col_hash[pos[1]] == mat.length
//             return ele
//         end
//     end
// end