let stack = [];
let stackSize = 5;

function push(element) {
    if (stack.length == stackSize) {
        console.log('Stack is Full! Can not Push Element !');
        return;
    }
    stack.push(element);
}
function pop() {
    if (stack.length === 0) {
        console.log('Stack is Empty! Can not pop Element !');
        return;
    }
    return stack.pop();
}
function size() {
    console.log("The size of Stack is :", stack.length);
}
function isFull() {
    if (stack.length === stackSize) {
        console.log("The Stack is Full!");
        return;
    }
    console.log("Stack is Not Full Yett");
}
function peek() {
    if (stack.length > 0) {
        console.log("The First Element is :",stack[0]);
    }else{
        console.log("Stack is Empty! Cannot Peek");
    }
}
push(1);
push(2);
push(3);
push(4);
push(5);
push(7);
console.log(`Stack ${stack}`);
pop();
pop();
pop();
pop();
console.log(`Stack ${stack}`);
size();
isFull();
peek();