    //  question 1

function employeesInDepartment(employees){
    return employees
        .filter(function(emp){
        return emp.department=="Finance"
        })
        .map(function(emp){
            return emp.name
        });

}


const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
console.log(employeesInDepartment(employees)); // Output: ['Jane Smith', 'Maria Lopez']
  

     

    // question 2

function totalSalaryByDepartment(employees){
    return employees
    .filter((emp)=>emp.department=="Finance")
    .reduce((emp,char)=> emp+char.salary,0)
}    


//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
console.log(totalSalaryByDepartment(employees, "Finance")); // Output: 125000
  





    //    question 3
  
function employeeSummary(employees){
    return employees.map(function(emp){
        return `Employee ${emp.name} works in ${emp.department} and earm $${emp.salary} annually.`
    })
}



const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
console.log(employeeSummary(employees));
  // Output: [
  //   "Employee John Doe works in HR department and earns $50000 annually.",
  //   "Employee Jane Smith works in Finance department and earns $60000 annually.",
  //   "Employee Alex Johnson works in IT department and earns $70000 annually.",
  //   "Employee Maria Lopez works in Finance department and earns $65000 annually."
  // ]
  
  