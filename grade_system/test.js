"use strict";
const students = [
    {
        stuname: "shiv",
        maths: 56,
        english: 76,
        cs: 87,
        python: 67,
        c: 67,
    },
    {
        stuname: "bala",
        maths: 87,
        english: 93,
        cs: 93,
        python: 96,
        c: 98,
    },
    {
        stuname: "ajay",
        maths: 46,
        english: 85,
        cs: 67,
        python: 24,
        c: 75,
    },
    {
        stuname: "ram",
        maths: 72,
        english: 73,
        cs: 86,
        python: 74,
        c: 85,
    },
    {
        stuname: "shree",
        maths: 58,
        english: 92,
        cs: 84,
        python: 24,
        c: 95,
    },
];
function averageMarks(student) {
    const totalSubjects = 5;
    const totalMarks = student.maths + student.english + student.cs + student.python + student.c;
    return totalMarks / totalSubjects;
}
function calculateGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else if (average >= 40) {
        return "E";
    }
    else {
        return "F";
    }
}
console.log("Student Grades:");
for (const student of students) {
    const average = averageMarks(student);
    const grade = calculateGrade(average);
    console.log(`${student.stuname}: Average Marks - ${average.toFixed(2)}, Grade - ${grade}`);
}
