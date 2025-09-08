/**
 * Problem statement - https://leetcode.com/problems/edit-distance/description/
 */


// insertion -> dp[i][j-1];
// deletion -> dp[i-1][j];
// replace -> dp[i-1][j-1];


function minDistance(word1, word2) {
    let n = word1.length;
    let m = word2.length;

    let dp = Array.from({length: n+1}, ()=> Array(m+1).fill(0));

    for(let i = 1; i <= m; i++) {
        dp[0][i] = i;
    }
    for(let i = 1; i <= n; i++) {
        dp[i][0] = i;
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(
                    dp[i][j-1],
                    dp[i-1][j],
                    dp[i-1][j-1]
                ) + 1;
            }
        }
    }
    return dp[n][m];
};