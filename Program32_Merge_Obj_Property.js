const marksList1 = {
    "Alice": 77.0,
    "Brian": 86.7
}
const marksList2 = {
    "Arya": 92.5,
    "Asia": 77.6
}
function mergedObjectProperty(marksList1, marksList2) {
    return marksList1, marksList2;
}
let mergedTwoObjProperty = mergedObjectProperty(marksList1, marksList2);
for (let key in mergedTwoObjProperty) {
    console.log("The Student is :", key, "and has got :", mergedTwoObjProperty[key]);
}
