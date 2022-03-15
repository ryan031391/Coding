// You are given a 0-indexed integer array nums containing distinct numbers, an integer start, and an integer goal. There is an integer x that is initially set to start, and you want to perform operations on x such that it is converted to goal. You can perform the following operation repeatedly on the number x:

// If 0 <= x <= 1000, then for any index i in the array (0 <= i < nums.length), you can set x to any of the following:

// x + nums[i]
// x - nums[i]
// x ^ nums[i] (bitwise-XOR)
// Note that you can use each nums[i] any number of times in any order. Operations that set x to be out of the range 0 <= x <= 1000 are valid, but no more operations can be done afterward.

// Return the minimum number of operations needed to convert x = start into goal, and -1 if it is not possible.

 

// Example 1:

// Input: nums = [2,4,12], start = 2, goal = 12
// Output: 2
// Explanation: We can go from 2 → 14 → 12 with the following 2 operations.
// - 2 + 12 = 14
// - 14 - 2 = 12
// Example 2:

// Input: nums = [3,5,7], start = 0, goal = -4
// Output: 2
// Explanation: We can go from 0 → 3 → -4 with the following 2 operations. 
// - 0 + 3 = 3
// - 3 - 7 = -4
// Note that the last operation sets x out of the range 0 <= x <= 1000, which is valid.
// Example 3:

// Input: nums = [2,8,16], start = 0, goal = 1
// Output: -1
// Explanation: There is no way to convert 0 into 1.



/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minimumOperations = (a, x, y) => {
    let dis = Array(1001).fill(Number.MAX_SAFE_INTEGER);
    let q = [];
    q.push(x);
    dis[x] = 0;
    while (q.length) {
        let cur = q.shift();
        if (cur == y) return dis[cur];
        for (const e of a) {
            let t1 = cur + e, t2 = cur - e; t3 = cur ^ e;
            let next = [t1, t2, t3];
            for (const ne of next) {
                if (ne >= 0 && ne <= 1000) {
                    if (dis[ne] > dis[cur] + 1) { // bfs next node if smaller, and update current min distance 
                        dis[ne] = dis[cur] + 1;
                        q.push(ne);
                    }
                } else {
                    if (ne == y) return dis[cur] + 1; // reach the goal
                }
            }
        }
    }
    return -1;
};