We are given hours, a list of the number of hours worked per day for a given employee.

A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.

A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.

Return the length of the longest well-performing interval.

 

Example 1:

Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].
Example 2:

Input: hours = [6,6,6]
Output: 0


# @param {Integer[]} hours
# @return {Integer}
def longest_wpi(hours)
    arr = []
    hours.each do |hour|
        if hour > 8
            arr.push(1)
        else
            arr.push(-1)
        end
    end
    prefix = [0]
    for i in (0...arr.length)
        prefix.push(prefix[-1]+arr[i])
    end
    max = 0
    for i in (1...prefix.length)
        prev = prefix[0...i]
        sum = prefix[i]
        j = 0
        found = false
        while j < prev.length
            if prev[j] < sum
                found = true
                break
            end
            j += 1
        end
        if found
            if max < i - j 
                max = i - j 
            end
        end
    end
    return max
end
      