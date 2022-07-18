// #!/bin/ruby

// require 'json'
// require 'stringio'



// #
// # Complete the 'minimumMovement' function below.
// #
// # The function is expected to return an INTEGER.
// # The function accepts INTEGER_ARRAY obstacleLanes as parameter.
// #

// def minimumMovement(obstacleLanes)
//     # Write your code here
//     # pos_arr = [[1, 2], [0, 2], [0, 1]]
//     # return recur(obstacleLanes, 0, 1, pos_arr)
//     if obstacleLanes.length == 0
//         return 0
//     elsif obstacleLanes[0] == 1
//         prev = [-1, 0, 1]
//     elsif obstacleLanes[0] == 2
//         prev = [1, -1, 1]
//     else
//         prev = [1, 0, -1]
//     end
//     i = 1
//     prev_obs = obstacleLanes[0] - 1
//     pos_arr = [[1, 2], [0, 2], [0, 1]]
//     while i < obstacleLanes.length
//         obs = obstacleLanes[i] - 1 
//         cur = [0, 0, 0]
//         k = 0 
//         for k in (0..2)
//             if k == obs
//                 cur[k] = -1
//             else
//                 prev_pos1 = pos_arr[prev_obs][0]
//                 prev_pos2 = pos_arr[prev_obs][1]
//                 if k == prev_pos1
//                     cur[k] = [prev[prev_pos1], prev[prev_pos2]+1].min()
//                 elsif k == prev_pos2
//                     cur[k] = [prev[prev_pos1]+1, prev[prev_pos2]].min()
//                 else
//                     cur[k] = [prev[prev_pos1], prev[prev_pos2]].min() + 1
//                 end
//             end
//         end
//         prev_obs = obs
//         prev = cur
//         i += 1
//     end
//     prev.delete_at(prev_obs)
//     return prev.min()
// end

// # def recur(arr, i, pos, pos_arr)
// #     if i == arr.length
// #         return 0
// #     end
// #     j = i
// #     while j < arr.length
// #         if arr[j] == pos + 1
// #             break
// #         end
// #         j += 1 
// #     end
// #     if j == arr.length 
// #         return 0
// #     else
// #         step1 = recur(arr, j, pos_arr[pos][0], pos_arr)
// #         step2 = recur(arr, j, pos_arr[pos][1], pos_arr)
// #         return [step1, step2].min()+1
// #     end
// # end

// fptr = File.open(ENV['OUTPUT_PATH'], 'w')

// obstacleLanes_count = gets.strip.to_i

// obstacleLanes = Array.new(obstacleLanes_count)

// obstacleLanes_count.times do |i|
//     obstacleLanes_item = gets.strip.to_i
//     obstacleLanes[i] = obstacleLanes_item
// end

// result = minimumMovement obstacleLanes

// fptr.write result
// fptr.write "\n"

// fptr.close()
