let array = [1, 'a', 0, '0', null, 100, false, 'yellow', undefined, '', 11.50];
let newArray=[];
function removeFalsyValues(array) {
    for (let value of array) { //Here if u Write in Then Output Will be in INDEX number
        // and If u write Of Then it will iterate on Values.
        if (Boolean(value) == true) {
            newArray+=value+" ";
        }
    }
    console.log(newArray);
}
removeFalsyValues(array)