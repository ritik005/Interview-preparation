/*
Problem Statement - Print the Longest Common Subsequence from given 2 string
Example - string1 = 'abcde'
string2 = 'abdef'
o/p -> abde
*/


function LCS(string1, string2){
    let n = string1.length;
    let m = string2.length;

    let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <=m; j++) {
            if(string1[i-1] === string2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp;
}

function PrintLCS(string1, string2) {
    let dp = LCS(string1, string2);

    let i = string1.length;
    let j = string2.length;
    let result = '';

    while (i !== 0 || j !== 0) {
        if(string1[i-1] === string2[j-1]) {
            result += string1[i-1];
            i--;
            j--;
        } else {
            if(dp[i-1][j]> dp[i][j-1]) {
                i--;
            } else {
                j--;
            }
        }
    }
    let charArray = result.split('');
    let reverseArray = charArray.reverse();
    let finalResult = reverseArray.join('');
    console.log(finalResult);
}

let string1 = 'abcde';
let string2 = 'abdef';
PrintLCS(string1, string2);
