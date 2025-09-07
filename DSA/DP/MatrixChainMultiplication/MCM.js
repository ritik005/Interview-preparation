/**
 * Problem Statement - https://www.geeksforgeeks.org/dsa/matrix-chain-multiplication-dp-8/
 */

//Find i,j value
//Find the base condition
//find the condition for loop (k ki value from where to where)
//divide accordingly 

function MCM(arr, i, j, dp) {
    if(i >= j) return 0;
    if(dp[i][j] !== -1) return dp[i][j];

    let res = Number.POSITIVE_INFINITY;

    for(let k = i; k < j; k++) {
        let tempArr = MCM(arr,i,k,dp) + MCM(arr,k+1,j, dp) + arr[i-1]*arr[k]*arr[j];
        res = Math.min(res,tempArr);
    }
    dp[i][j] = res;
    return dp[i][j];
}

let arr = [1, 2, 3, 4, 3];
let n = arr.length;
let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
console.log(MCM(arr,1,n-1,dp));