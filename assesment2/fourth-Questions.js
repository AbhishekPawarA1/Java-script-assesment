
// Input
const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
  ];
  
  // Condition function: Sort by age in descending order
function sortStudentsByCondition(students)  {
    return students.sort((a,b)=>
        b.age-a.age
    )
}
  
  // Output
const sortedStudents = sortStudentsByCondition(students);
console.log(sortedStudents);
  // Output should be:
  // [
  //   { name: "Charlie", age: 23 },
  //   { name: "Alice", age: 21 },
  //   { name: "David", age: 20 },
  //   { name: "Bob", age: 19 }
  // ]
  
  