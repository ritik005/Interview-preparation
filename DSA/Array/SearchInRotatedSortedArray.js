// Search Element in a Rotated Sorted Array

// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

const searchElement = (arr, k) => {
    let start = 0;
    let end = arr.length-1;
    while (start <= end) {
        let mid = start + (end - start) / 2;
        if(arr[mid] === k) return mid;
        if(arr[start] <= arr[mid]) {
            if(arr[start] <= k && arr[mid] > k) end = mid - 1;
            else start = mid + 1;
        }
        else {
            if(arr[mid] < k && arr[end] >= k) start = mid + 1;
            else end = mid - 1;
        }
    }
    return -1;
};


const arr = [4,5,6,7,8,0,1];
const k =1;
console.log("Index of element", searchElement(arr,k));