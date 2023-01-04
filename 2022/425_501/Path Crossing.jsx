// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

// Example 1:


// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:


// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.
 

// Constraints:

// 1 <= path.length <= 104
// path[i] is either 'N', 'S', 'E', or 'W'.



// def is_path_crossing(path)
//     store = Hash.new(0)
//     x_point, y_point = 0, 0
    
//     store[[x_point, y_point]] = 1
    
//     path.chars.each do |char|
//         if char == 'N'
//             x_point += 1
//         elsif char == 'S'
//             x_point -= 1
//         elsif char == 'W'
//             y_point -= 1
//         elsif char == 'E'
//             y_point += 1
//         end
        
//         store[[x_point, y_point]] += 1
        
//         return true if store[[x_point, y_point]] > 1
//     end
    
//     return false
// end
