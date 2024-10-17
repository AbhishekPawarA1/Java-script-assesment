
//     // question 1

// // Using custom methods
// Array.prototype.customeSlice = function(start,end){
//     const result=[]
//     for (let i=start;i<end;i++){
//         result.push(this[i])
//     }
//     return result;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customeSlice(1, 3)); // Output: [2, 3]

//     //   question 2

//  const arr = [1, 2, 3, 4, 5];   
// console.log(arr.customSplice(2, 0, 6)); // Output: [1, 2, 6, 3, 4, 5]

//     //   question 3

// Array.prototype.customPush = function(...elements) {
//     for (let element of elements) {
//         this[this.length] = element; 
//     }
//     return this.length; 
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customPush(6, 7)); 

// // Verify the contents of the array
// console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]



     
//         //  question 4

// Array.prototype.customPop = function() {
    
//     const lastElement = this[this.length - 1];
//     this.length--;
//     return lastElement;
// };
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customPop()); // Output: 5 (the removed element)
// console.log(arr);

// // // Using custom higher-order functions

//         //  question 5

// Array.prototype.customMap = function(callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//       result.push(callback(this[i], i, this));
//     }
//     return result;
//   };
// const arr = [1, 2, 3, 4, 5];  
// console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]


//         // question 6

// Array.prototype.customFilter = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };
        
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]


//         //   question 7

// Array.prototype.customReduce = function(callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i], i, this);
//     }
//     return accumulator;
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15


