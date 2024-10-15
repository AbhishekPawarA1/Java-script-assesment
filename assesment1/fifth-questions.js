const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


    //   Question 10

function countCalculation (emp){
    var MathTeacherCount=emp.departments.math.teachers
    var historyTeacherCount=emp.departments.history.teachers
    var mathstudentCount=emp.departments.math.teachers
    var historystudentCount=emp.departments.math.teachers

    return {
        MathTeacherCount,
        historyTeacherCount,
        mathstudentCount,
        historystudentCount
    };
}

result=countCalculation(school)
console.log(result)

      // Question 11

function findTopStudent(school, subject) {
  let topStudent = null;
  let highestScore = -1;

  for (const student of school.students) {
      const score = student.scores[subject];
      if (score > highestScore) {
          highestScore = score;
          topStudent = student;
      }
  }

  return topStudent;
}

console.log(findTopStudent(school, 'math'));

 
    // question 12


function addNewDept(school,newDepartment){
  school.departments[newDepartment.name]={
    teachers:newDepartment.teachers,
    students:newDepartment.students
  }
  return school
};

const newDepartment ={
  name:"art",
  teachers:2,
  students:50
};
console.log(addNewDept(school, newDepartment));


      // question 13

function highestStudentCountDepartment(school){
  var maxstudent=0
  var subject=""
  for (var dept in school.departments){
    if (school.departments[dept].students>maxstudent){
       maxstudent=school.departments[dept].students
       subject=dept;
    }     
  }
  return subject
  
}

console.log(highestStudentCountDepartment(school));//math


        // question 14



function generateGreeting (name,language){
  if (language=="Spanish"){
    return `¡Hola, ${name}!`
  }
  else if (language=="French"){
    return `Bonjour, ${name}!`
  }
  else {
    return `Hello, ${name}`
  }
}
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

