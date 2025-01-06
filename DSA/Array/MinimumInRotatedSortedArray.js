// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 


const minimumNumber = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let minNumber = Infinity;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[start] <= arr[end]) {
            minNumber = Math.min(minNumber, arr[start]);
            break;
        }
        if(arr[mid] >= arr[start]) {
            minNumber = Math.min(minNumber, arr[start]);
            start = mid + 1;
        }
        else{
            minNumber = Math.min(minNumber, arr[mid]);
            end = mid - 1;
        }
    }
    return minNumber;
};

const brr = [4,5,6,7,8,0,1,2];
console.log("MinimumNumber", minimumNumber(brr));
