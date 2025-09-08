/**
 * Problem statement - https://leetcode.com/problems/palindrome-partitioning-ii/submissions/1746495765/
 */

//Recursively + DP
function minCut(s) {
    let n = s.length;

    // Step 1: Precompute palindromes
    let isPal = Array.from({length: n}, () => Array(n).fill(false));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                if (len <= 2) isPal[i][j] = true;
                else isPal[i][j] = isPal[i+1][j-1];  
            }
        }
    }

    // Step 2: Memoization table
    let dp = Array.from({length: n}, () => Array(n).fill(-1));

    // Step 3: Recursive function (MCM style)
    function mcm(i, j) {
        if (i >= j) return 0;
        if (isPal[i][j]) return 0;   // no cut needed
        if (dp[i][j] !== -1) return dp[i][j];

        let ans = Number.POSITIVE_INFINITY;

        for (let k = i; k < j; k++) {
            if (isPal[i][k]) { // Only cut if left part is palindrome
                let right = mcm(k+1, j);
                ans = Math.min(ans, 1 + right);
            }
        }

        dp[i][j] = ans;
        return ans;
    }

    return mcm(0, n-1);
}

// Bottom up 
function minCut(s) {
    const n = s.length;

    // Step 1: Precompute palindromes
    let isPal = Array.from({ length: n }, () => Array(n).fill(false));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                if (len <= 2) isPal[i][j] = true;
                else isPal[i][j] = isPal[i + 1][j - 1];
            }
        }
    }

    // Step 2: DP for minimum cuts
    let cut = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (isPal[0][i]) {
            cut[i] = 0; // whole substring is palindrome → no cut
        } else {
            cut[i] = i; // max cuts = cut each character
            for (let j = 0; j < i; j++) {
                if (isPal[j + 1][i]) {
                    cut[i] = Math.min(cut[i], 1 + cut[j]);
                }
            }
        }
    }

    return cut[n - 1];
}