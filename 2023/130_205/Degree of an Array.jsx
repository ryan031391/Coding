// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.



// def find_shortest_sub_array(nums)
//     max_freq = 0
//     h = {}
//     h_pos = {}
//     nums.each_with_index do |v,i|
        
//         h[v] ||= 0
//         h[v] += 1
        
//         if h_pos[v].nil?
//             x =  {first: i, last: i, size: 1}
//             h_pos[v] = x
//         else
//             a =  h_pos[v][:first]
//             b =  (i - h_pos[v][:first] + 1)
//             x = {first: a , last: i, size: b }
//             h_pos[v] = x
//         end
        
//         max_freq = h[v] if h[v] > max_freq
//     end
    
//     minimum = h.to_a
//         .select{|(key,val)| val == max_freq}
//         .map{|(key,val)| h_pos[key][:size]}.min
//     minimum
// end