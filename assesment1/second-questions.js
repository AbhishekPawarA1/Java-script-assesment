
// //   questions 1 

function employeeInformation(employees) {
    return {
        secondEmployeeName: employees[1].name,
        secondEmployeeDepartment: employees[1].department
    };
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); 



    //    questions 2


function averageSalary(employees){
    var totalsum=employees.reduce((emp,crr)=>emp+crr.salary,0)
    return totalsum/employees.length
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
console.log(averageSalary(employees)); // Output: 60000
  
        //  question  3

function thirdEmployeeInfo(employees){
    var bonus=(employees[2].salary/100)*10
     return `Employee: ${employees[2].name}, Age: ${employees[2].age}, Salary: ${employees[2].salary}, Bonus: ${bonus}`
    
}
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];


console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
  
