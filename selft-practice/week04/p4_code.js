let operations = {
    add: function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    }
}

const addtest = operations.add
console.log(addtest(2,2))

////////////////////////////////

const students = [
  { studentId: 'S001', studentName: 'สมชาย', scores: { math: 85, science: 90, english: 78 } },
  { studentId: 'S002', studentName: 'สมหญิง', scores: { math: 92, science: 88, english: 95 } },
  { studentId: 'S003', studentName: 'สมศรี', scores: { math: 75, science: 80, english: 82 } },
];

function calculateStudentScores(student){
    return student.map(student => {
        const SubjectScore = Object.values(student.scores)
        const totalScore = SubjectScore.reduce((sum,score) => sum+=score,0)
        const numberOfSubject = Object.keys(student.scores).length
        const averageScore = totalScore/numberOfSubject
        return{
             studentId: student.studentId,
             studentName: student.studentName,
             totalScore: totalScore,
             averageScore: averageScore
        }
    }
)
}

console.log(calculateStudentScores(students))