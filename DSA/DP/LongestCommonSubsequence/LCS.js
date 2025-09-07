/*
Problem Statement - 
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example - 
Input -> text1 = "abcde", text2 = "ace" 
Output -> 3 (ace)

*/

// Recursive + Memoization
function LCS(string1, string2, n, m, dp) {
    if(n === 0 || m === 0) return 0;
    if(dp[n][m] !== -1) return dp[n][m];

    if(string1[n-1] === string2[m-1]) {
        dp[n][m] = 1 + LCS(string1, string2, n-1, m-1, dp);
    } else {
        dp[n][m] = Math.max(LCS(string1, string2, n-1,m,dp), LCS(string1,string2, n, m-1,dp));
    }

    return dp[n][m];
}

// Iterative + memoization

function LCS2(string1, string2) {
    let n = string1.length;
    let m = string2.length;
    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <= m; j++) {
            if(string1[i-1] === string2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return dp[n][m];

}

const string1 = 'intention', string2 = 'execution';
let n = string1.length;
let m = string2.length;
let dp = Array.from({length: n+1}, () => Array(m+1).fill(-1));
console.log(LCS(string1, string2, n,m, dp));
console.log(LCS2(string1, string2));