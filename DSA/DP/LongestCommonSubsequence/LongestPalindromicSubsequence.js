/*
Problem statement - https://leetcode.com/problems/longest-palindromic-subsequence/description/
*/


function longestPalindromeSubseq(s1) {
    let charArray = s1.split('');
    let reverseArray = charArray.reverse();
    let s2 = reverseArray.join('');
    let n = s1.length;
    let m = s2.length;

    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

    for(let i = 1; i <=n; i++) {
      for(let j = 1; j <=m; j++) {
        if(s1[i-1] === s2[j-1]) {
          dp[i][j] = 1 + dp[i-1][j-1];
        } else {
          dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
        }
      }
    }

    return dp[n][m];
};

let s1 = "aacabdkacaa"
console.log(longestPalindromeSubseq(s1));
// Output: 4