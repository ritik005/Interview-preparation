/**
 * 
 * Problem statement -
 * Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
    In one step, you can delete exactly one character in either string.
    Input: word1 = "sea", word2 = "eat"
    Output: 2
    Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

    Link - https://leetcode.com/problems/delete-operation-for-two-strings/description/
 */

// Approach - calculate LCS and subtract strings length from it 

function minDistance(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    let dp = Array.from({length: n+1}, ()=> Array(m+1).fill(0));

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <=m ; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return n + m - (dp[n][m] + dp[n][m]);
};

const word1 = 'sea', word2 = 'eat';
console.log(minDistance(word1,word2));