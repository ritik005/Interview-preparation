//recursevily
function flattenArray1(arr, depth = 1) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    [])
}

//Iteratively
function flattenArray2(arr) {
    const stack = [...arr]
    const result = [];
    
    while(stack.length) {
        const next = stack.pop();
        if(Array.isArray(next)) {
            stack.push(...next)
        }
        else {
            result.unshift(next);
        }
    }
    return result;
}


//For the purpose of user debugging.
flattenArray1([1, [2, [3, 4], 5], 6]);
flattenArray2([1, [2, [3, 4], 5], 6]);