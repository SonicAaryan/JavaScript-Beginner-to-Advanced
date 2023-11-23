function objectCheck(empDetails) {
    //(empDetails == Boolean({})) ? console.log('True , Object is Empty') : console.log('false , Object is Not Empty');
    for (let a in empDetails) {
        if (a == null) {
            console.log(true);
        }
    }
}
const empDetails = {

}
objectCheck(empDetails);
// console.log(typeof empDetails);