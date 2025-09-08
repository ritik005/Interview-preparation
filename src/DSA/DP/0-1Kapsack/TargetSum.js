function findTargetSumWays(nums, target) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    let zeros = nums.filter(num => num === 0).length;

    if ((sum + target) % 2 !== 0 || Math.abs(target) > sum) return 0;

    const updatedTarget = (sum + target) / 2;

    // Remove zeros before subset sum
    const nonZeroNums = nums.filter(num => num !== 0);

    return Math.pow(2, zeros) * subsetSum(nonZeroNums, updatedTarget);
};

function subsetSum(arr, target) {
    let n = arr.length;
    let dp = Array.from({length: n + 1}, () => Array(target + 1).fill(0));

    for(let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= target; j++) {
            if(j >= arr[i-1]) {
                dp[i][j] = dp[i-1][j] + dp[i-1][j-arr[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][target];
}