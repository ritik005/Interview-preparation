function minimumDifference(nums){
    const target = nums.reduce((acc, curr) => acc + curr, 0);
    const result = subsetSum(nums, target);
    let mn = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < result.length; i++) {
        mn = Math.min(mn, Math.abs(target - (2 * result[i])));
    }
    return mn;

};

function subsetSum(arr, target) {
    let n = arr.length;
    let dp = Array.from({length: n+1}, () => Array(target + 1).fill(false));

    for(let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= target; j++) {
            if(j >= arr[i-1]) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    let someArr = [];
    for(let i = 0; i <= target/2; i++) {
        if(dp[n][i]) {
            someArr.push(i);
        }
    }
    console.log(dp);
    return someArr;
}


const nums = [36,36];
console.log(minimumDifference(nums));