let body = document.getElementById('body');
let div = document.getElementById('container');
let box = document.getElementById('whitebox');
let p = document.getElementById('p');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');

let i = 0;
start.addEventListener('click', function (box) {
    setInterval(function () {
        p.innerHTML = ++i;
        console.log(i);
    }, 1000);
});

stop.addEventListener('click', function () {
    setTimeout(function () {
        p.innerHTML = i;
        console.log('==================')
        console.log(i)
        console.log('==================')
    }, 500);
});

restart.addEventListener('click', function () {

});