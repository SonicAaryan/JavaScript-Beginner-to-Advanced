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