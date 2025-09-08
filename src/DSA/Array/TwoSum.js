// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.


// Two pointer with sorting approach Time complexity O(nlogn), Space - O(1)

const twoSum = (arr, target) => {
    arr.sort((a,b)=> a-b);
    let j = arr.length;
    let i = 0;
    while(i < j) {
        if(arr[i]+arr[j] === target) return "Yes";
        else if(arr[i] + arr[j] < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return "No";
};

// Variant which returns indices - using hashing (), T.C - O(n), S.C - O(n)

const twoSumIndices = (arr, target) => {
    const hashMap = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(hashMap.has(target-arr[i])) return [hashMap.get(target-arr[i]), i];
        hashMap.set(arr[i],i);
    }
    return [-1,-1];
}

const arr = [2,6,5,8,12];
const target = 15;

console.log("Is Pair present", twoSum(arr,target));
console.log("Return Indices", twoSumIndices(arr,target));
