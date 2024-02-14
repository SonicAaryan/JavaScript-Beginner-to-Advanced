const name = "Aaryan";
const age = 21;
const city = "San Francisco";
var myGlobal = "Global";

function getPersonInfo() {
    const name = "sachin";
    const age = 30;

    function inner() {
        console.log(this);
        return `${name} is ${age} and Lives in ${city}`
    }
    return inner();
}
console.log(getPersonInfo());