// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

// Example 1:


// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:


// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?



// # @param {Integer[][]} board
// # @return {Void} Do not return anything, modify board in-place instead.
// def game_of_life(board)
//     live = Set.new
//     dead = Set.new
    
//     #set next moves
//     traverse_board(board) do |row, col|
//         value = determine_value(board, row, col)
//         next if value.nil? || value == board[row][col]
        
//         if value == 1
//             live << [row,col]
//         else
//             dead << [row,col]
//         end
//     end
    
//     live.each do |(row,col)|
//         board[row][col] = 1
//     end
    
//     dead.each do |(row,col)|
//         board[row][col] = 0
//     end
    
//     board
// end

// def determine_value(board, row, col)
//     cell = board[row][col]
//     live = value_of_neighbors(board, row, col)
    
//     #live
//     if cell == 1 && live == 2 || live == 3
//         return 1
//     end
    
//     if cell == 0 && live == 3
//         return 1
//     end
    
//     0
// end

// def value_of_neighbors(board, row, col)
//     live = 0
    
//     live += board[row][col+1] if col+1 < board[0].length #right
//     live += board[row][col-1] if col-1 >= 0 #left
    
//     live += board[row+1][col] if row+1 < board.length # up
//     live += board[row-1][col] if row-1 >= 0 #down
    
//     live += board[row-1][col+1] if col+1 < board[0].length && row-1 >= 0 #upleft
//     live += board[row-1][col-1] if col-1 >= 0 && row-1 >= 0 #downleft
    
//     live += board[row+1][col+1] if col+1 < board[0].length && row+1 < board.length #upright
//     live += board[row+1][col-1] if col-1 >= 0 && row+1 < board.length #downright
    
//     live
// end

// #keeps traversal logic cleaner
// #since nested forloops aren't fun
// def traverse_board(board)
//     rows = board.length-1
//     cols = board[0].length-1
    
//     0.upto(rows) do |row|
//         0.upto(cols) do |col|
//             yield row, col
//         end
//     end
// end