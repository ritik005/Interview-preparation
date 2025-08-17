/*
Problem Statment - 
Given a knapsack weight W and a set of n items with certain value val and weight wt, 
we need to calculate maximum amount that could make up this quantity exactly. 
This is different from classical Knapsack problem, here we are allowed to use unlimited number  of instances of an item.
Examples:
Input : W = 100
       val[]  = {1, 30}
       wt[] = {1, 50}
Output : 100
*/


//Recursively + memoiszation
function unboundedKnapsack(wt, val, n, W, dp) {
    if(n === 0 || W === 0) return 0;
    if(dp[n][W] !== -1) return dp[n][W];

    if(W >= wt[n-1]) {
        dp[n][W] = Math.max(
            unboundedKnapsack(wt, val, n-1, W, dp), val[n-1] + unboundedKnapsack(wt, val, n, W-wt[n-1], dp)
        );
    } else {
        dp[n][W] = unboundedKnapsack(wt, val, n-1, W, dp);
    }

    return dp[n][W];
}

//Iteratively + Memoization

function unboundedKnapsackIteratively(wt, val, W) {
    let n = wt.length;
    let dp = Array.from({length: n+1}, () => Array(W+1).fill(0));

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= W; j++) {
            if(j >= wt[i-1]) {
                dp[i][j] = Math.max(dp[i-1][j], val[i-1] + dp[i][j-wt[i-1]]); // we can take as many as we can
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][W];
}

const W = 8;
const val = [10, 40, 50, 70];
const wt = [1,3,4,5];
let n = wt.length;

const dp = Array.from({length: n+1}, () => Array(W+1).fill(-1));
console.log(unboundedKnapsack(wt,val,n,W,dp));
console.log(unboundedKnapsackIteratively(wt,val,W));