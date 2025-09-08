/**
 * Problem Statement - https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/
 */


function minimumDeleteSum(s1, s2) {
    let n = s1.length;
    let m = s2.length;

    let dp = Array.from({length: n+1}, ()=> Array(m+1).fill(0));

    for(let i = 1; i <= m; i++) {
        dp[0][i] = dp[0][i-1] + s2.charCodeAt(i-1)
    }
    for(let i = 1; i <= n; i++) {
        dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1)
    }

    for(let i = 1; i<= n; i++ ){
        for(let j = 1; j <=m; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i][j-1] + s2.charCodeAt(j-1), dp[i-1][j] + s1.charCodeAt(i-1))
            }
        }
    }
    return dp[n][m];
};