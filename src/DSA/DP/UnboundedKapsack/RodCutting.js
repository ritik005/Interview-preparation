/*
Given a rod of length N inches and an array price[] where price[i] denotes the value of a piece of rod of length i 
inches (1-based indexing). Determine the maximum value obtainable by cutting up the rod and selling the pieces. 
Make any number of cuts, or none at all, and sell the resulting pieces.
Input: price = [1, 6, 8, 9, 10, 19, 7, 20], N = 8

Output: 25
*/

function rodCutting(price) {
    let n = price.length;
    let len = [];
    for(let i = 0; i<n; i++) {
        len.push(i+1);
    }
    const dp = Array.from({length: n+1}, () => Array(n+1).fill(0));

    for(let i = 1; i< n+1; i++) {
        for(let j=1; j <n+1; j++) {
            if(j >= len[i-1]) {
                dp[i][j] = Math.max(dp[i-1][j], price[i-1] + dp[i][j-len[i-1]]);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][n];
    
};

let price = [3, 5, 8, 9, 10, 17, 17, 20];
console.log(rodCutting(price));
