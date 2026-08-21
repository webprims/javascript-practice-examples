const students = [
  { name: "Aman", score: 78 },
  { name: "Simran", score: 91 },
  { name: "Gurpreet", score: 84 }
];

const names = students.map(student => student.name);
const highScorers = students.filter(student => student.score >= 80);
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const average = totalScore / students.length;

console.log("Names:", names);
console.log("Score 80+:", highScorers);
console.log("Average:", average.toFixed(2));

// Practice: sort the students from highest to lowest score.
