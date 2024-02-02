// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// function isEmptyObj(empDetails) {
//     for (let key in empDetails) {
//         console.log('Object :', Object.keys(empDetails)); //  here it will print 'id' bcz it is the key.
//         // and if we print Object,keys(key) then output will be '0','1' bcz String & Number String From 0 index.
//         if ((Object.keys(empDetails))) {
//             // console.log("False");
//             return false;
//         }
//     }
//     return true;
// }

function isEmpty(empDetails) {
    let flag = true;
    for (let key in empDetails) { // empDetails empty asel tar toh ath janarach nahi aath
        // console.log('key :', Object.keys(empDetails));
        console.log('key :', key);
        if (key) { // here key is variable which hold some value(key id) , if key madhe kahi tari asel tar toh enter karel
            flag = false;
            return flag;
        }
    }
    return flag;
}

const empDetails = {
    id: 1,
    // empName: "ABC"
}
console.log(isEmpty(empDetails));