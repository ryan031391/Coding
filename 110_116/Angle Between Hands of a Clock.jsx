// Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.

// Answers within 10-5 of the actual value will be accepted as correct.

 

// Example 1:


// Input: hour = 12, minutes = 30
// Output: 165
// Example 2:


// Input: hour = 3, minutes = 30
// Output: 75
// Example 3:


// Input: hour = 3, minutes = 15
// Output: 7.5

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if (hour === 12) {
        hour = 0
    }
    let ha = hour * 30 + (minutes / 2)
    let ma = minutes * 6
    let result = Math.abs(ha - ma)
    return Math.min(result, 360 - result)
};