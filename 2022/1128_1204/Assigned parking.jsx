// #!/bin/ruby

// require 'json'
// require 'stringio'


// #
// # Complete the 'minFuel' function below.
// #
// # The function is expected to return a LONG_INTEGER.
// # The function accepts following parameters:
// #  1. INTEGER_ARRAY x
// #  2. INTEGER_ARRAY y
// #

// def minFuel(x, y)
//     # Write your code here
// return find_x(x) + find_y(y)
// end

// def find_x(x)
// x = x.sort()
// num = x[0]
// sum = 0
// arr = []
// for i in (0...x.length)  
//         arr.push(x[i] - num)
// sum += arr[i].abs
// num += 1
// end
// arr = arr.sort()
// min = sum
// n = arr.length
// i = 1
// while i < n
//         diff = arr[i] - arr[i - 1]
// sum = sum - diff * (n - i) + diff * i
// if sum < min 
//             min = sum
// end
// i += 1
// end
// return min
// end

// def find_y(y)
// arr = y.sort()
// min = 0
// arr.each{| ele | min += ele - arr[0] }
// i = 1
// n = arr.length
// last_num = arr[0]
// sum = min
// while i < n
//         num = arr[i]
// diff = num - last_num
// sum = sum - diff * (n - i) + diff * i
// last_num = num
// i += 1
// if sum < min
//             min = sum
// end
// end
// return min
// end
// fptr = File.open(ENV['OUTPUT_PATH'], 'w')

// x_count = gets.strip.to_i

// x = Array.new(x_count)

// x_count.times do | i |
//     x_item = gets.strip.to_i
//     x[i] = x_item
// end

// y_count = gets.strip.to_i

// y = Array.new(y_count)

// y_count.times do | i |
//     y_item = gets.strip.to_i
//     y[i] = y_item
// end

// result = minFuel x, y

// fptr.write result
// fptr.write "\n"

// fptr.close()
