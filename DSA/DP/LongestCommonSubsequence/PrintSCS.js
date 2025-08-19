/*
Problem statement - Given two strings X and Y, print the shortest string that has both X and Y as subsequences. 
If multiple shortest supersequence exists, print any one of them.
Example - 
Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB" 
*/

// Approach -> print LCS only once and rest strings (variation of printing LCS)


function printSCS(string1, string2) {
    let n = string1.length;
    let m = string2.length;
    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));
    let result = '';

    // LCS
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <= m; j++) {
            if(string1[i-1] === string2[j-1]) {
               dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    let i = string1.length;
    let j = string2.length;

    while(i > 0 && j > 0) {
        if(string1[i-1] === string2[j-1]) {
            result += string1[i-1];
            i--;
            j--;
        } else {
            if(dp[i-1][j] > dp[i][j-1]) {
                result += string1[i-1];
                i--;
            } else {
                result += string2[j-1];
                j--;
            }
        }
    }
    while(i > 0) {
        result += string1[i-1];
        i--;
    } 
    while(j > 0) {
        result += string2[j-1];
        j--;
    }
    let charArray = result.split('');
    let reversedArray = charArray.reverse();
    let finalResult = reversedArray.join('');
    console.log(finalResult);
}

let string1 = 'AGGTAB', string2 = 'GXTXAYB';
printSCS(string1, string2);

