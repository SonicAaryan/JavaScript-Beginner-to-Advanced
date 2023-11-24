function objectCheck(empDetails) {
    for (let a in empDetails) {
        if ((Object.keys(a))) {
            console.log("False");
            return;
        }
    }
    console.log('True');
}
const empDetails = {
    // id: 1,
    // empName: "ABC"
}
objectCheck(empDetails);