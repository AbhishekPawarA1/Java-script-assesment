
// Input

function calculateFinalGrades(students) {
  const result = [];
  
  for (let student of students) {
      // Calculate the average score
      const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
      
      // If average score is more than 60, add the student to the result
      if (avgScore >= 70) {
          result.push({ id: student.id, name: student.name, finalGrade: Math.round(avgScore) });
      }
  }
  
  return result;
}

const students = [
  { id: 1, name: "Alice", scores: [85, 90, 92] },
  { id: 2, name: "Bob", scores: [70, 68, 72] },
  { id: 3, name: "Charlie", scores: [60, 65, 58] },
  { id: 4, name: "David", scores: [75, 80, 78] },
];
const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);
  // Output should be:
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]

  
