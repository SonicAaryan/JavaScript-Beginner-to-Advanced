let roomDetails = {
    width: 300,
    heidth: 600,
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