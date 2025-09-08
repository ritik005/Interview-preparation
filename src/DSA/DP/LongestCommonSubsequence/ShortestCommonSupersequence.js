/*
Problem statement - Given two strings X and Y, print the length of shortest string that has both X and Y as subsequences. 
If multiple shortest supersequence exists, print any one of them.
Example - 
Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB" length -> 9
*/


// Approach -> (length of X + length of Y ) - length of LCS 
//Recursively + DP
function LCS(string1, string2, n, m, dp) {
    if(n === 0 || m === 0) return 0;
    if(dp[n][m] !== -1) return dp[n][m];

    if(string1[n-1] === string2[m-1]) {
        dp[n][m] = 1 + LCS(string1,string2,n-1,m-1,dp);
    } else {
        dp[n][m] = Math.max(LCS(string1,string2, n-1,m,dp), LCS(string1,string2,n,m-1,dp));
    }
    return dp[n][m];
}

//Iteratively

let string1 = 'AGGTAB', string2 = 'GXTXAYB';
let n = string1.length;
let m = string2.length;
let dp = Array.from({length: n+1}, () => Array(m+1).fill(-1));
let SCSLength = n + m - LCS(string1, string2, n,m,dp);
console.log(SCSLength);