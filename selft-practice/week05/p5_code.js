const students = [
  { name: 'Alice', mathScore: 90, scienceScore: 85 },
  { name: 'Bob', mathScore: 88, scienceScore: 95 },
  { name: 'Charlie', mathScore: 90, scienceScore: 80 },
  { name: 'David', mathScore: 95, scienceScore: 92 },
  { name: 'Eve', mathScore: 88, scienceScore: 88 }
];

function sortMath(students){
    return students.sort((a,b) => a.mathScore - b.mathScore)
}

const sortScience = (students) => students.sort((a,b) => b.scienceScore - a.scienceScore )

console.log(sortMath(students))
console.log(sortScience(students))