// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// Input: amount = 5, coins = [1,2,5]
// Output: 4

// Bottom up 
function change(amount, coins) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, () => Array(amount+1).fill(0));

    for(let i = 0; i< n+1; i++) {
        dp[i][0] = 1;
    }

    for(let i = 1; i < n+1; i++) {
        for(let j = 1; j < amount+1; j++) {
            if(j >= coins[i-1]) {
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][amount];
};

//Recursively + dp
function coinChange(coins, amount, n, dp) {
    if(amount === 0) return 1;
    if(n === 0) return 0;
    if(dp[n][amount] !== -1) return dp[n][amount];

    if(amount >= coins[n-1]) {
        dp[n][amount] = coinChange(coins, amount, n-1, dp) + coinChange(coins, amount-coins[n-1], n, dp);
    } else {
        dp[n][amount] = coinChange(coins, amount, n-1, dp);
    }

    return dp[n][amount];
}

let amount = 10, coins = [10];
let n = coins.length;
let dp = Array.from({length: n+1}, () => Array(amount+1).fill(-1));
console.log(coinChange(coins, amount, n, dp));