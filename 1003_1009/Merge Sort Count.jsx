// #!/bin/ruby

// require 'json'
// require 'stringio'



// #
// # Complete the 'largestCountValue' function below.
// #
// # The function is expected to return an INTEGER.
// # The function accepts INTEGER_ARRAY a as parameter.
// #

// def largestCountValue(a)
//     # Write your code here
//     arr = recur(a)
//     max = 0
//     arr.each do |ele|
//         if ele[1] > max
//             max = ele[1]
//         end
//     end
//     return max
// end

// def recur(a)
//     if a.length == 1
//         return [[a[0], 0]]
//     elsif a.length == 0
//         return [] 
//     end
//     left = recur(a[0..(a.length-1)/2])
//     right = recur(a[(a.length-1)/2 + 1..-1])
//     return helper(left, right)
// end

// def helper(a, b)
//     arr = []
//     while !a.empty? && !b.empty?
//         num1 = a[0]
//         num2 = b[0]
//         if num1[0] > num2[0]
//             num = b.shift()
//             arr.push([num[0], num[1]+1])
//         else
//             arr.push(a.shift())
//         end
//     end
//     arr.concat(a).concat(b)
//     return arr
// end

// fptr = File.open(ENV['OUTPUT_PATH'], 'w')

// a_count = gets.strip.to_i

// a = Array.new(a_count)

// a_count.times do |i|
//     a_item = gets.strip.to_i
//     a[i] = a_item
// end

// result = largestCountValue a

// fptr.write result
// fptr.write "\n"

// fptr.close()
