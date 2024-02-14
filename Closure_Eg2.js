function createCounter(init) {
    let count = 0;

    return function () {
        console.log(init);
        count++;
        console.log(count);
    };
}
const counter = createCounter(10);
counter();
counter();
counter();