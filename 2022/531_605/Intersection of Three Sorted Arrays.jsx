// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

 

// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.
// Example 2:

// Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
// Output: []
 

// Constraints:

// 1 <= arr1.length, arr2.length, arr3.length <= 1000
// 1 <= arr1[i], arr2[i], arr3[i] <= 2000



// # @param {Integer[]} arr1
// # @param {Integer[]} arr2
// # @param {Integer[]} arr3
// # @return {Integer[]}
// def arrays_intersection(arr1, arr2, arr3)
//   hash = {}

//   add_to_hash(arr1, hash)
//   add_to_hash(arr2, hash)
//   add_to_hash(arr3, hash)

//   hash.select { |_, value| value == 3 }.map { |key, _| key }
// end

// def add_to_hash(array, hash)
//   array.each do |number|
//     hash[number] = hash[number].to_i + 1
//   end
// end