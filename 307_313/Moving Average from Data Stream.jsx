// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.
 

// Example 1:

// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
 

// Constraints:

// 1 <= size <= 1000
// -105 <= val <= 105
// At most 104 calls will be made to next.



// class MovingAverage

// =begin
//     Initialize your data structure here.
//     :type size: Integer
// =end
//     def initialize(size)
//         @size = size
//         @ints = []
//         @sum = 0
//     end


// =begin
//     :type val: Integer
//     :rtype: Float
// =end
//     def next(val)
//         @ints << val
//         @sum += val
//         if @ints.count > @size
//             @sum -= @ints.shift
//         end
        
//         @sum.to_f / @ints.count
//     end


// end

// # Your MovingAverage object will be instantiated and called as such:
// # obj = MovingAverage.new(size)
// # param_1 = obj.next(val)