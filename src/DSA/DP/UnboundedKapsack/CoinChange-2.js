/*
Problem statement - Coin Change Problem Minimum Numbers of coins
Given a value V, if we want to make change for V cents, and we have infinite supply of each of C = { C1, C2, .. , Cm} valued coins,
what is the minimum number of coins to make the change?
Example:

Input: coins[] = {25, 10, 5}, V = 30
Output: Minimum 2 coins required
We can use one coin of 25 cents and one of 5 cents 


*/

function coinChange(coins, V) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, () => Array(V+1).fill(0));

    //Initialization - (little twist will fill second row as well)

    for(let i = 1; i <= V; i++) {
        dp[0][i] = Number.POSITIVE_INFINITY - 1;
    }
    for(let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }
    for(let j = 1; j <= V; j++) {
        if(j % coins[0] === 0) {
            dp[1][j] = j/coins[0];
        } else {
            dp[1][j] = Number.POSITIVE_INFINITY - 1;
        }  
    }

    for(let i = 2; i<= n; i++) {
        for(let j = 1; j <= V; j++) {
            if(coins[i-1] <= j) {
                dp[i][j] = Math.min(dp[i-1][j], 1 + dp[i][j-coins[i-1]]);
            } else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    if(dp[n][V] === Number.POSITIVE_INFINITY) return -1;
    return dp[n][V];
}

let coins = [2], V = 11;
console.log(coinChange(coins, V));
