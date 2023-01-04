// #!/bin/ruby

// require 'json'
// require 'stringio'



// #
// # Complete the 'closestStraightCity' function below.
// #
// # The function is expected to return a STRING_ARRAY.
// # The function accepts following parameters:
// #  1. STRING_ARRAY c
// #  2. INTEGER_ARRAY x
// #  3. INTEGER_ARRAY y
// #  4. STRING_ARRAY q
// #

// def closestStraightCity(c, x, y, q)
//     # Write your code here
//     hash = Hash.new(nil)
//     c.each_with_index do |ele, i|
//         hash[ele] = [x[i], y[i]] 
//     end
//     hash_x = Hash.new(nil)
//     x.each_with_index do |ele, i|
//         if !hash_x[ele] 
//             hash_x[ele] = [[c[i], y[i]]]
//         else
//             hash_x[ele].push([c[i], y[i]])
//         end
//     end
//     hash_y = Hash.new(nil)
//     y.each_with_index do |ele, i|
//         if !hash_y[ele] 
//             hash_y[ele] = [[c[i], x[i]]]
//         else
//             hash_y[ele].push([c[i], x[i]])
//         end
//     end
//     hash_dist = Hash.new(nil)
//     hash_x.each do |k, v|
//         if v.length < 2
//             next
//         end
//         sorted_arr = v.sort {|ele1, ele2| ele1[1] <=> ele2[1]}
//         hash_dist[sorted_arr[0][0]] = [sorted_arr[1][0], sorted_arr[1][1] - sorted_arr[0][1]]
//         hash_dist[sorted_arr[-1][0]] = [sorted_arr[-2][0], sorted_arr[-1][1] - sorted_arr[-2][1]]
//         i = 1
//         while i < sorted_arr.length - 1 
//             name = sorted_arr[i][0]
//             if sorted_arr[i][1] - sorted_arr[i-1][1] > sorted_arr[i+1][1] - sorted_arr[i][1]
//                 hash_dist[name] = [sorted_arr[i+1][0] , sorted_arr[i+1][1] - sorted_arr[i][1]]
//             else
//                 hash_dist[name] = [sorted_arr[i-1][0] , sorted_arr[i][1] - sorted_arr[i-1][1]]
//             end
//             i += 1  
//         end
//     end
//     hash_y.each do |k, v|
//         if v.length < 2
//             next
//         end
//         sorted_arr = v.sort {|ele1, ele2| ele1[1] <=> ele2[1]}
//         helper(hash_dist, sorted_arr[0][0], sorted_arr[1][0], sorted_arr[1][1] - sorted_arr[0][1])
//         helper(hash_dist, sorted_arr[-1][0], sorted_arr[-2][0], sorted_arr[-1][1] - sorted_arr[-2][1])
//         i = 1
//         while i < sorted_arr.length - 1 
//             name = sorted_arr[i][0]
//             if sorted_arr[i][1] - sorted_arr[i-1][1] > sorted_arr[i+1][1] - sorted_arr[i][1]
//                 helper(hash_dist, name, sorted_arr[i+1][0], sorted_arr[i+1][1] - sorted_arr[i][1])
//             else
//                 helper(hash_dist, name, sorted_arr[i-1][0], sorted_arr[i][1] - sorted_arr[i-1][1])
//             end
//             i += 1  
//         end
//     end
//     result = []
//     q.each do |ele|
//         if hash_dist[ele]
//             result.push(hash_dist[ele][0])
//         else
//             result.push('NONE')
//         end
//     end
//     return result
// end

// def helper(hash, my_name, name,dist)
//     if !hash[my_name]
//         hash[my_name] = [name, dist]
//     else
//         if dist < hash[my_name][1]
//             hash[my_name] = [name, dist]
//         elsif dist == hash[my_name][1]
//             hash[my_name] = [[name, hash[my_name][0]].min(), dist]
//         end
//     end
// end

// fptr = File.open(ENV['OUTPUT_PATH'], 'w')

// c_count = gets.strip.to_i

// c = Array.new(c_count)

// c_count.times do |i|
//     c_item = gets.chomp

//     c[i] = c_item
// end

// x_count = gets.strip.to_i

// x = Array.new(x_count)

// x_count.times do |i|
//     x_item = gets.strip.to_i
//     x[i] = x_item
// end

// y_count = gets.strip.to_i

// y = Array.new(y_count)

// y_count.times do |i|
//     y_item = gets.strip.to_i
//     y[i] = y_item
// end

// q_count = gets.strip.to_i

// q = Array.new(q_count)

// q_count.times do |i|
//     q_item = gets.chomp

//     q[i] = q_item
// end

// result = closestStraightCity c, x, y, q

// fptr.write result.join "\n"
// fptr.write "\n"

// fptr.close()
