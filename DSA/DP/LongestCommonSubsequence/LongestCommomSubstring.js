/*
 Problem Statement - https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 */

 // TODO : Work on space optimization, currently its o(m*m), make it o(m/n);

function findLength(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

    let maxx = 0;
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <=m; j++ ) {
            if(nums1[i-1] === nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = 0;
            }
            maxx = Math.max(maxx, dp[i][j]);
        }
    }
   
    return maxx;
};