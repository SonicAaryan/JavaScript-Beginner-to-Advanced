/*
Write a JavaScript program to print the length of a JavaScript object.
e.g.
{
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    age: 15
};
Output: 4
*/
const studentDetails = {
    studentName: "Aaryan",
    studentRollNo: 15462,
    dept: "Msc.cs",
    age: 21,
    location: "Pune"
}
let count = 0;
for (let temp in studentDetails) {
    count += 1;
}
console.log("The Total Records in objects are :", count);