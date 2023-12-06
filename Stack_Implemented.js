let stack=[];
let stackSize=5;

function push(element){
    if(stack.length==stackSize){
        console.log('Stack is Full! Can not Push Element !');
        return;
    }
    stack.push(element);
}
function pop(){
    if(stack.length===0){
        console.log('Stack is Empty! Can not pop Element !');
        return;
    }
    return stack.pop();
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
pop();
pop();
console.log(`Stack ${stack}`);