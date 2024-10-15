// 1. Custom Splice

function customSplice(arr, start, deleteCount, ...items) {
    const removedItems = arr.slice(start, start + deleteCount);
    const newArray = [
        ...arr.slice(0, start),
        ...items,
        ...arr.slice(start + deleteCount)
    ];
    return { newArray, removedItems };
}

// Example usage:
let array1 = [1, 2, 3, 4, 5];
let result1 = customSplice(array1, 1, 2, 'a', 'b');
console.log(result1.newArray); // Output: [1, 'a', 'b', 4, 5]
console.log(result1.removedItems); // Output: [2, 3]


// 2. Custom Includes

function customIncludes(arr, value) {
    for (let item of arr) {
        if (item === value) {
            return true;
        }
    }
    return false;
}

// Example usage:
let array2 = [1, 2, 3, 4];
console.log(customIncludes(array2, 3)); // Output: true
console.log(customIncludes(array2, 5)); // Output: false



// 3. Custom ToLowerCase

function customToLowerCase(str) {
    let lowerStr = '';
    for (let char of str) {
        lowerStr += char.toLowerCase();
    }
    return lowerStr;
}

// Example usage:
console.log(customToLowerCase('Hello World!')); // Output: 'hello world!'


// 4. Custom ToUpperCase


function customToUpperCase(str) {
    let upperStr = '';
    for (let char of str) {
        upperStr += char.toUpperCase();
    }
    return upperStr;
}

// Example usage:
console.log(customToUpperCase('Hello World!')); // Output: 'HELLO WORLD!'


// 5. Custom Push

function customPush(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

// Example usage:
let array3 = [1, 2, 3];
let newLength = customPush(array3, 4);
console.log(array3); // Output: [1, 2, 3, 4]
console.log(newLength); // Output: 4


// 6. Custom Pop

function customPop(arr) {
    if (arr.length === 0) return undefined;
    const lastItem = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastItem;
}

// Example usage:
let array4 = [1, 2, 3];
let poppedItem = customPop(array4);
console.log(poppedItem); // Output: 3
console.log(array4); // Output: [1, 2]
