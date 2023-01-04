// You are given an array of network towers towers, where towers[i] = [xi, yi, qi] denotes the ith network tower with location (xi, yi) and quality factor qi. All the coordinates are integral coordinates on the X-Y plane, and the distance between the two coordinates is the Euclidean distance.

// You are also given an integer radius where a tower is reachable if the distance is less than or equal to radius. Outside that distance, the signal becomes garbled, and the tower is not reachable.

// The signal quality of the ith tower at a coordinate (x, y) is calculated with the formula ⌊qi / (1 + d)⌋, where d is the distance between the tower and the coordinate. The network quality at a coordinate is the sum of the signal qualities from all the reachable towers.

// Return the array [cx, cy] representing the integral coordinate (cx, cy) where the network quality is maximum. If there are multiple coordinates with the same network quality, return the lexicographically minimum non-negative coordinate.

// Note:

// A coordinate (x1, y1) is lexicographically smaller than (x2, y2) if either:
// x1 < x2, or
// x1 == x2 and y1 < y2.
// ⌊val⌋ is the greatest integer less than or equal to val (the floor function).
 

// Example 1:


// Input: towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2
// Output: [2,1]
// Explanation: At coordinate (2, 1) the total quality is 13.
// - Quality of 7 from (2, 1) results in ⌊7 / (1 + sqrt(0)⌋ = ⌊7⌋ = 7
// - Quality of 5 from (1, 2) results in ⌊5 / (1 + sqrt(2)⌋ = ⌊2.07⌋ = 2
// - Quality of 9 from (3, 1) results in ⌊9 / (1 + sqrt(1)⌋ = ⌊4.5⌋ = 4
// No other coordinate has a higher network quality.
// Example 2:

// Input: towers = [[23,11,21]], radius = 9
// Output: [23,11]
// Explanation: Since there is only one tower, the network quality is highest right at the tower's location.
// Example 3:

// Input: towers = [[1,2,13],[2,1,7],[0,1,9]], radius = 2
// Output: [1,2]
// Explanation: Coordinate (1, 2) has the highest network quality.


/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
    let max_y = Number.MIN_SAFE_INTEGER;
    let min_y = Number.MAX_SAFE_INTEGER;
    let max_x = Number.MIN_SAFE_INTEGER;
    let min_x = Number.MAX_SAFE_INTEGER;
    
    towers.forEach(tower => {
        if(tower[1] > max_y) max_y = tower[1];
        if(tower[1] < min_y) min_y = tower[1];
        if(tower[0] > max_x) max_x = tower[0];
        if(tower[0] < min_x) min_x = tower[0];
    });
    
    let max_coord = [0, 0]; 
    let max_pow = 0;
    
    
    for(let i=min_y; i<= max_y; i++){
        for (let j=min_x; j<= max_x; j++){
            const power = compute_power(j, i, towers, radius);
            if(power > max_pow){
                max_pow = power;
                max_coord = [j, i];
            } else if (power === max_pow){
                if((max_coord[0] > j) || ((max_coord[0] === j) && (max_coord[1] > i) )){
                    max_coord = [j, i];
                }
            }
        }
    }
    
    return max_coord;
};

const compute_distance = (x1, y1, x2, y2) => {
    return Math.sqrt((Math.pow(x1 - x2, 2) + (Math.pow(y1 - y2, 2))));
}

const compute_power = (x, y, towers, radius) => {
    let power = 0;
    return towers.reduce((acc, tower) => { 
        const dist = compute_distance(x, y, tower[0], tower[1]);
        let local_power = 0;
        if(dist <= radius){
            local_power = Math.floor(tower[2] / (1 + dist));
        }
        return acc + local_power;
    }, 0);
};