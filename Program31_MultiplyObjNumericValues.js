/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
e.g.
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/
let roomDetails = {
    width: 300,
    height: 600,
    wallColor: "White"
}
let multiplyNumericValues = (roomDetails) => {
    for (const key in roomDetails) {
        if (typeof roomDetails[key] === 'number') {
            console.log('roomDetails :', roomDetails[key], 'typeof roomDetails[key] :', typeof roomDetails[key]);
            roomDetails[key] = roomDetails[key] * 2; // Performing operation and storing into it.
        }
    }
    console.log('after modification :', roomDetails);
}
multiplyNumericValues(roomDetails);