/*
Problem Statement - 
Given an integer array nums, return true if you can partition the array into two 
subsets such that the sum of the elements in both subsets is equal or false otherwise.

Example - 
Input: nums = [1,5,11,5]
Output: true

Input: nums = [1,2,3,5]
Output: false
*/


function canPartition(nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    if(sum%2 !== 0) return false;
    return subsetSum(nums, sum/2); 
};


function subsetSum(arr, target) {
    let n = arr.length;
    let dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = true
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= target; j++) {
            if(j >= arr[i-1]) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][target];
}