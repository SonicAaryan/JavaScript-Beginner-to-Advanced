let inputString = "aabccc";
let stringCompression = (inputString) => {
    let jumpIndex1 = 1;
    // let jumpIndex2 = 2;
    let newString = "";
    for (let iterationOne = 0; iterationOne < inputString.length - 1; iterationOne++) {
        let count = 1;
        if (inputString[iterationOne] == inputString[jumpIndex1]) {
            ++count;
            ++jumpIndex1;
            newString += inputString[iterationOne] + count;
        } else {
            newString += inputString[jumpIndex1] + count;
            ++jumpIndex1;
        }

    }
    console.log(newString);
}
//console.log(stringCompression(inputString));
stringCompression(inputString);