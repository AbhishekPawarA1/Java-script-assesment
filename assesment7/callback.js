const numbers = [12, 5, 8, 3, 10, 7, 14, 1];

function filterArray(arr, callback) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

const callback = (element) => {
  return element % 2 === 0;
};

const filteredNumbers = filterArray(numbers, callback);

console.log("Original Array:", numbers);
console.log("Filtered Array (Even Numbers):", filteredNumbers);
