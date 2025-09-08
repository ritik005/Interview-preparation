// Kadane's Algorithm : Maximum Subarray Sum in an Array

// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

//T.C o(n^2)
const maxSumSubArray = (arr) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for(let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};

//T.C - O(n) - initiallizing the current sum with 0 whenever it is less than 0
const maxSumArrayOptimize = (arr) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    for(let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        maxSum = Math.max(maxSum, currSum);
        if(currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
};

const printSubArrayMaxSum = (arr) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    let start = 0;
    let startIndex = -1, endIndex = -1;

    for(let i = 0; i < arr.length; i++) {
        if(currSum === 0) start = i;
        currSum += arr[i];

        if(currSum > maxSum) {
            maxSum = currSum;

            startIndex = start;
            endIndex = i;
        }
        if(currSum < 0) {
            currSum = 0;
        }
    }

    return [startIndex, endIndex]
}

const arr = [-2,1,2,4,-5,-3];
console.log("MaxSum ", maxSumSubArray(arr));
console.log("MaxSum2 ", maxSumArrayOptimize(arr));
console.log(printSubArrayMaxSum(arr));