let queue = [];
let queueSize = 5;

function enqueue(num) {
    if (queue.length === queueSize) {
        console.log("The Queue Is Full ");
        return;
    }
    return queue.push(num);
}
function dequeue() {
    if (queue.length === 0) {
        console.log("Queue Is Empty Cannot remove Element");
        return;
    }
    queue.pop();
}
function peek() {
    if (queue.length > 0) {
        console.log("The First Element in the Queue is:", queue.shift(0));
        return;
    }
    console.log("Queue Is Empty");
}
function isFull() {
    if (queue.length == queueSize) {
        console.log("QUEUE IS FULL");
    } else {
        console.log("QUEUE IS NOT YETT FULL!");
    }
}
function size() {
    console.log("The Size of the Queue is:", queue.length);
}
enqueue(2);
enqueue(7);
enqueue(12);
console.log("The Queue Has :", queue);
dequeue();
dequeue();
console.log("After Removing Element :", queue);
enqueue(32);
enqueue(15);
enqueue(47);
console.log("Elements After Adding:",queue);
peek();
enqueue(37);
enqueue(2);
enqueue(20);
console.log(queue);
isFull();
size();
