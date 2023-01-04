def findRemainingBalls(direction, strength)
    # Write your code here
    arr = Array.new(direction.length, 1)
    i = 0
    prev_dir = -1
    while i < direction.length
        dir = direction[i]
        str = strength[i]
        if dir != prev_dir && prev_dir == -1
            prev_dir = 1
        elsif dir != prev_dir && prev_dir == 1
            j = i-1
            while j >= 0
                if arr[j] != 0 && direction[j] == 1
                    if strength[j] < str
                        arr[j] = 0
                    elsif strength[j] > str
                        arr[i] = 0
                        break
                    else
                        arr[i] = 0
                        arr[j] = 0
                        break
                    end
                end
                j -= 1
            end
            if j < 0
                prev_dir = -1
            end
        end
        i += 1
    end
    result = []
    arr.each_with_index do |ele, i|
        if ele > 0
            result.push(i)
        end
    end
    return result
end