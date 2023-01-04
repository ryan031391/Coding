// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

 

// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:

// Input: num = 9973
// Output: 9973
// Explanation: No swap.
 

// Constraints:

// 0 <= num <= 108


# @param {Integer} num
# @return {Integer}
def maximum_swap(num)
    result = num.to_s
    max = 0
    second = 1
    for i in (0...result.length)
        if result[i] > result[max]
            second = max
            max = i
        elsif result[i] > result[second] && result[i] < result[max]
            seconde = i
        end
    end
    if max != 0
        temp = result[0]
        result[0] = result[max]
        result[max] = temp
    else
        temp = result[1]
        result[1] = result[second]
        result[second] = temp
    end
    return result.to_i
end