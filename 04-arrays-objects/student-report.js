const students = [
  { name: "Aman", marks: [78, 84, 91] },
  { name: "Simran", marks: [88, 76, 95] },
  { name: "Rahul", marks: [67, 72, 70] },
  { name: "Mehak", marks: [93, 89, 96] },
];

function average(numbers) {
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

const report = students.map((student) => {
  const avg = average(student.marks);
  return {
    ...student,
    average: Number(avg.toFixed(2)),
    passed: avg >= 40,
  };
});

const topper = report.reduce((best, student) =>
  student.average > best.average ? student : best
);

console.table(report);
console.log(`Topper: ${topper.name} (${topper.average}%)`);

const classAverage =
  report.reduce((sum, student) => sum + student.average, 0) / report.length;

console.log(`Class average: ${classAverage.toFixed(2)}%`);

// Practice:
// 1. Add a "grade" field (A/B/C/D/F).
// 2. Filter students scoring above 80.
// 3. Sort the report from highest to lowest average.
