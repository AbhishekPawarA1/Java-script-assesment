    //   question 1

function highestPaid(employees){
    return employees
    .reduce(function(emp,char){
       if (emp.salary>char.salary){
        return emp
       }
       return char
    })
}

const employees = [
      { name: "John Doe", age: 30, department: "HR", salary: 50000 },
      { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
      { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    ];
    
console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
       

    //   question 2



const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function destructuringToSwap(employees){
    return employees.reverse();
    
}

console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
       