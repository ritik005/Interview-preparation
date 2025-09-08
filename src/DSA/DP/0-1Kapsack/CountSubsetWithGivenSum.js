/*
Problem Statement - We need to find out the count of subsets whose sum is equal to the given sum
input -
arr = [1,5,11,5]
target = 11
output - 2 
[1,5,5], [11]


*/


function countSubsetSum(arr, target) {
    let n = arr.length;
    let dp = Array.from({length: n+1}, () => Array(target + 1).fill(0));

    for(let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }


    for(let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            if(arr[i-1] <= j) {
                dp[i][j] = dp[i-1][j] + dp[i-1][j-arr[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][target];
}

let arr = [1,5,10];
let target = 11;

console.log(countSubsetSum(arr,target));