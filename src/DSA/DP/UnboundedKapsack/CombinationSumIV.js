/**
 * Problem Statment - https://leetcode.com/problems/combination-sum-iv/description/
 */
// Intution - 
// Now, outer loop is over target sum.

// At each sum t, we try all possible last numbers.

// So [1,2,1] and [2,1,1] are both discovered separately, since order of num inside matters.

// This gives ordered sequences (permutations) → which is what Combination Sum IV asks for.

function combinationSum4(nums, target) {
    let dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let t = 1; t <= target; t++) {
        for (let num of nums) {
            if (t >= num) {
                dp[t] = dp[t] + dp[t - num];
            }
        }
    }

    return dp[target];
};