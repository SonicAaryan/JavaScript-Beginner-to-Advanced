let inputString = "Hello My Name is Aaryan Sonar"
let count = 1;
if (inputString) {
    for (let emptySpace of inputString) {
        if (emptySpace == " ") {
            ++count;
        }
    }
    console.log(count);
}
else {
    console.log("Enter the Sentence!");
}