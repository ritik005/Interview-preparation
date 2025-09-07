/**
 * Problem Statement - https://leetcode.com/problems/uncrossed-lines/description/
 *
 */

//Same as LCS 

function maxUncrossedLines(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;

    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(nums1[i-1] === nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[n][m];
};