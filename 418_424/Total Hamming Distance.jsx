The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

 

Example 1:

Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Example 2:

Input: nums = [4,14,4]
Output: 4
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 109
The answer for the given input will fit in a 32-bit integer.
Accepted
87,125
Submissions
167,689



# @param {Integer[]} nums
# @return {Integer}
def total_hamming_distance(nums)
    result = 0
    for i in (0...nums.length-1)
        num1 = nums[i]
        for j in (i+1...nums.length) 
            num2 = nums[j]
            result += count_one((num1^num2).to_s(2))
        end
    end
    return result
end

def count_one(s)
    total = 0
    s.each_char do |char|
        if char == "1"
            total += 1
        end
    end
    return total
end