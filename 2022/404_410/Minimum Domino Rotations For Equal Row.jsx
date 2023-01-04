// In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

// Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

// If it cannot be done, return -1.

 

// Example 1:


// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation: 
// The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
// Output: -1
// Explanation: 
// In this case, it is not possible to rotate the dominoes to make one row of values equal.
 

// Constraints:

// 2 <= tops.length <= 2 * 104
// bottoms.length == tops.length
// 1 <= tops[i], bottoms[i] <= 6




// def min_domino_rotations(a, b)
//     top = a[0]
//     bottom = b[0]
    
//     top_count = = { top: 0, bottom: 0 }
//     bottom_count = { top: 0, bottom: 0 }

//     top_valid = bottom_valid = true
    
//     for i in (0..a.length-1)
//         break if !top_valid && !bottom_valid
        
//         if top_valid
//             if a[i] != b[i]
//                 top_count[:top] += 1 if a[i] == top
//                 top_count[:bottom] += 1 if b[i] == top
//             end
            
//             top_valid = false if a[i] != top && b[i] != top
//         end
        
//         if bottom_valid
//             if a[i] != b[i]
//                 bottom_count[:top] += 1 if a[i] == bottom
//                 bottom_count[:bottom] += 1 if b[i] == bottom
//             end
            
//             bottom_valid = false if a[i] != bottom && b[i] != bottom
//         end
//     end
    
//     if top_valid
//         [top_count[:top], top_count[:bottom]].min
//     elsif bottom_valid
//         [bottom_count[:top], bottom_count[:bottom]].min
//     else
//        -1 
//     end
// end
