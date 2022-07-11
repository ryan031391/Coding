// #!/bin/ruby

// # Complete the 'getUmbrellas' function below.
// #
// # The function is expected to return an INTEGER.
// # The function accepts following parameters:
// #  1. INTEGER requirement
// #  2. INTEGER_ARRAY sizes
// #

// def getUmbrellas(requirement, sizes)
//     # Write your code here
//     arr = sizes.uniq().sort()
//     return recur(requirement, arr, 0)
// end

// def recur(num, sizes, i)
//     if num == 0
//         return 0
//     elsif i >= sizes.length || num < sizes[i]
//         return -1
//     elsif num == sizes[i]
//         return 1
//     end
//     k = num/sizes[i]
//     min = -1
//     for n in (0..k)
//         result = recur(num-sizes[i]*n, sizes, i+1)
//         if result != -1
//             result += n
//             if min == -1 || min > result
//                 min = result
//             end
//         end
//     end
//     return min
// end

//     hash = Hash.new(false)
//     sizes.each do |size|
//         hash[size] = true
//     end
//     arr = Array.new(requirement+1, -1)
//     for i in (1...arr.length)
//        if hash[i]
//         arr[i] = 1
//        else
//         min = -1
//         for j in (1..i/2)
//             if arr[j] != -1 && arr[i-j] != -1
//                 temp = arr[j] + arr[i-j]
//                 if min == -1 || min > temp
//                     min = temp
//                 end
//             end
//         end
//         arr[i] = min
//        end 
//     end
//     return arr[-1]

