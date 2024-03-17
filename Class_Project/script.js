let body = document.getElementById('body');
let div = document.getElementById('container');
let box = document.getElementById('whitebox');
let p = document.getElementById('p');

let start = document.getElementById('start');
let pause = document.getElementById('stop');
let restart = document.getElementById('restart');


let temp;
let seconds = 0;
let hours = 0;
let minute = 0;

let timer = () => {
    // return time;
    if (seconds <= 59) {
        // console.log(`${minute}: ${seconds++}`);
        return `${hours} : ${minute} : ${seconds++}`
    }
    else {
        if (minute >= 59) {
            hours++;
            minute = 0;
        }
        seconds = 0;
        // console.log(` ${minute}: ${seconds++}`);
        return `${hours} : ${minute++} : ${seconds++}`

    }
};
let flag = false;
start.addEventListener('click', function () {
    if (flag == false) {
        let id = setInterval(function () {
            p.innerHTML = timer();
            if (temp == 'pause') {
                console.log('IN IF');
                clearInterval(id);
                flag = false;
                temp = '';
            }
        }, 1000);
    }
    flag = true
    // console.log(flag, "True");
});

restart.addEventListener('click', function () {
    let restart = p.innerHTML = "00:00:00"
    clearInInterval(restart);

});

pause.addEventListener('click', function () {
    // clearInInterval();
    temp = 'pause';
});

