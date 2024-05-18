//======================= CORE function =====================
const arrSquare = arr => arr.map(item => item * item);
//======================= CORE function =====================
const TOT_NUMBER = 10;

//* 初始畫面
const panel = document.querySelector('#panel');
for (let i = 0; i < TOT_NUMBER; i++) {
    panel.innerHTML += '<div class="col"><div class="arr arr1"></div><div class="arrow"><i class="fa-solid fa-caret-down"></i></div><div class="arr arr2"></div></div>';
}

const monitorArr1 = document.querySelectorAll('.arr1');
const monitorArr2 = document.querySelectorAll('.arr2');

const updateMonitor = () => {
    for (let i = 0; i < TOT_NUMBER; i++) {
        monitorArr1[i].innerHTML = arr1[i];
        monitorArr2[i].innerHTML = arr2[i];
    }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arrSquare(arr1);

updateMonitor();

const dice = document.querySelector('#dice');
dice.addEventListener('click', function () {
    this.classList.add('animate__swing');

    setTimeout(() => {
        this.classList.remove('animate__swing');
    }, 500);
});

const randomInt = (lower, upper) =>
    Math.floor((upper - lower + 1) * Math.random() + lower);

dice.addEventListener('click', () => {
    for (let i = 0; i < TOT_NUMBER; i++) {
        arr1[i] = randomInt(1, 32);
    }
    arr2 = arrSquare(arr1);
    updateMonitor();
});