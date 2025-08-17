// Recursive DP
function subsetSum(arr, target, n, dp) {
    if (target === 0) return true;
    if(n === 0) return false;
    if(dp[n][target] !== -1) return dp[n][target];


    if(target >= arr[n-1]) {
        dp[n][target] = subsetSum(arr, target, n-1, dp) || subsetSum(arr, target-arr[n-1], n-1, dp);
    } else {
        dp[n][target] = subsetSum(arr,target,n-1,dp);
    }
    return dp[n][target];
}

// Iterative 

function subsetSumIterative(arr, target) {
    let n = arr.length;
    let dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = true; // sum 0 is always possible
    }
    for (let j = 1; j <= target; j++) {
        dp[0][j] = false; // can't make positive sum with 0 items
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

let arr = [1, 2, 7, 3], target = 10;
let n = arr.length;
const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));
const result = subsetSum(arr, target, n, dp );
const result1 = subsetSumIterative(arr, target);

console.log(result);
console.log(result1);