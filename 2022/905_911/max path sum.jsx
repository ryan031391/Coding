def maxPathSum(board, p, q)
    # Write your code here
    arr = []
    for i in (0...board.length)
        arr.push(Array.new(board[0].length, 0)) 
    end
    i = 0
    while i < board.length
        j = 0
        while j < board[0].length 
            if i == 0
                arr[i][j] = board[i][j]
            else
                mid = arr[i-1][j]
                right = left = 0
                if j+1 < board[0].length 
                    right = arr[i-1][j+1]
                end
                if j-1 >= 0
                    left = arr[i-1][j-1]
                end
                arr[i][j] = board[i][j] + [mid, left, right].max()
            end
            j += 1
        end
        i += 1
    end
    
    arr1 = []
    for i in (0...board.length)
        arr1.push(Array.new(board[0].length, 0)) 
    end
    i = board.length - 1
    while i >= 0
        j = 0
        while j < board[0].length 
            if i == board.length - 1
                arr1[i][j] = board[i][j]
            else
                mid = arr1[i+1][j]
                right = left = 0
                if j+1 < board[0].length 
                    right = arr1[i+1][j+1]
                end
                if j-1 >= 0
                    left = arr1[i+1][j-1]
                end
                arr1[i][j] = board[i][j] + [mid, left, right].max()
            end
            j += 1
        end
        i -= 1
    end
    
    return [arr[board.length-1][q], arr1[0][p]].max()
    # return [dfs(board, 0, p, 1), dfs(board, board.length-1, q, -1)].max()
    # arr = [[0, p, board[0, p]]]
    # while !arr.empty?
    #     temp = []
    #     pos = arr.shift()
    #     temp.push([pos[0]+1, pos[1], pos[2]+board[pos[0]+1, pos[1]]])
    #     if pos[1]-1 > 0
    #         temp.push([pos[0]+1, pos[1]-1, pos[2]+board[pos[0]+1, pos[1]-1]])
    #     end
    #     if pos[1]+1 < board[0].length 
    #         temp.push([pos[0]+1, pos[1]+1, pos[2]+board[pos[0]+1, pos[1]+1]])
    #     end
        
    # end
    
end

def dfs(board, i, j, dir)
    if j < 0 || j >= board[0].length
        return 0
    elsif (i == board.length - 1 && dir == 1) || (i == 0 && dir == -1)
        return board[i][j]
    end
    mid = dfs(board, i+dir, j, dir)
    left = dfs(board, i+dir, j-1, dir)
    right = dfs(board, i+dir, j+1, dir)
    return board[i][j] + [mid, left, right].max()
end