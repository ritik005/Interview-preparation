/* Problem Statement - 
Given two integer arrays, val and wt, each of size N, which represent the values and weights of N items respectively, and an integer W representing the maximum capacity of a knapsack, determine the maximum value achievable by selecting a subset of the items such that the total weight of the selected items does not exceed the knapsack capacity W.
Each item can either be picked in its entirety or not picked at all (0-1 property). The goal is to maximize the sum of the values of the selected items while keeping the total weight within the knapsack's capacity.
Examples:
Input: val = [60, 100, 120], wt = [10, 20, 30], W = 50
Output: 220
*/


//Recursive Solution - not DP 
function knapsack01(wt, val, W, n) {
    //Base Condition
    if(W === 0 || n === 0) return 0;

    if(W >= wt[n-1]) {
        // choice of either take it or not 
       return Math.max(knapsack01(wt, val, W, n-1), val[n-1] +  knapsack01(wt, val, W - wt[n-1], n-1))
    } else {
        // exclude 
        return knapsack01(wt, val, W, n-1);
    }
}

// Recursive + DP 
function knapsack01DP(wt, val, W, n, dp) {
    if(W === 0 || n === 0) return 0;
    if(dp[n][W] !== -1) return dp[n][W];

    if(W >= wt[n-1]) {
        dp[n][W] = Math.max(knapsack01DP(wt, val, W, n-1, dp), val[n-1] + knapsack01DP(wt, val, W-wt[n-1], n-1, dp))
    } else {
        dp[n][W] = knapsack01DP(wt, val, W, n-1, dp);
    }
    return dp[n][W];
}

// Iterative approach 
function knapsack01Iterative(wt, val, W, n) {
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
    for(let i = 1; i <= n; i++ ) {
        for(let j = 1; j <= W; j++) {
            if(j >= wt[i-1]) {
                dp[i][j] = Math.max(dp[i-1][j], val[i-1] + dp[i-1][j-wt[i-1]]);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][W];
}


let val = [60, 100, 120], wt = [10, 20, 30], W = 50;
let n = wt.length;
const dp1 = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1));
const dp2 = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

let result1 = knapsack01(wt,val,W,n);
let result2 = knapsack01DP(wt, val, W, n, dp1);
let result3 = knapsack01Iterative(wt, val, W, n);
console.log(result1);
console.log(result2);
console.log(result3);