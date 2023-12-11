// Approach 1 (By For Loop)
const marksList1 = {
    "Alice": 77.0,
    "Brian": 86.7
}
const marksList2 = {
    "Arya": 92.5,
    "Asia": 77.6
}
console.log("First Object ->", marksList1);
console.log("Second Object ->", marksList2);
let mergedTwoObjProperty = {};
for (let key in marksList1) {
    mergedTwoObjProperty[key] = marksList1[key];
}
for (let key in marksList2) {
    mergedTwoObjProperty[key] = marksList2[key];
}
console.log("After Merging Object we get :", mergedTwoObjProperty);
console.log("---------------------------------------------------------------------------------");
// Approach 2 By (spread Operator)
const nameList1 = {
    "id1": "Riya",
    "id2": "Rafel"
};
const nameList2 = {
    "id3": "Angel",
    "id4": "s-so"
};
const nameList3 = {
    ...nameList1,
    ...nameList2,
};
console.log("By spread Operator:", nameList3);
