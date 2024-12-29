// Problem Statement: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Using sorting T.C - O(nlogn)
const containsDuplicates = (arr) => {
    arr.sort((a,b) => a-b);
    for (let j = 1; j < arr.length; j++) {
        if(arr[j] === arr[j-1]) return true;
    }
    return false;
};

//Using an extra space TC - O(n), SC - O(n)
const containsDuplicates2 = (arr) => {
    let hashArray = new Map();
    for(let i = 0; i< arr.length; i++) {
        let value = hashArray.get(arr[i]) || 0;
        if(value >= 1) return true;
        hashArray.set(arr[i],++value);
    }
    
    return false;
};

const arr = [1,2,4,5];

console.log("Duplicate present 1 ?",containsDuplicates(arr) );
console.log("Duplicate present 2 ?",containsDuplicates2(arr) );