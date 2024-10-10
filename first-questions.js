     
     // 1st question combining

function combine(fruits, vegetables) {
    console.log([...fruits, ...vegetables]);
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
combine(fruits, vegetables);  
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

  

    //    2nd question cloning object

function find(person) {
    const clonedPerson = { ...person };
    console.log(clonedPerson);
}

const person = { name: "John", age: 30, address: "123 Main St" };
find(person);  
// Output: { name: 'John', age: 30, address: '123 Main St' }



      // 3rd question merging object

function combine2(student, course) {
   const combined = { ...student, ...course };
   console.log(combined);
}

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
combine2(student, course);  
// Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
    


         // 4th question combine nested array

function nestedarray(array1, array2) {
    console.log([...array1, ...array2]);
}

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];

nestedarray(array1, array2);  
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

  