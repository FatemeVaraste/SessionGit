const students = [{name:"Ali",grade:15},{name:"Sara",grade:18},{name:"Reza",grade:19}];
const highGrade = [];
for (const student of students) {
    if (student.grade > 17) {
        highGrade.push(student.name);
    }
}
console.log(highGrade);