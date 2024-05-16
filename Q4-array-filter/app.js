const numArr = [1, 35, 64, 9, -5, 37, 11, 27, 90, -41, -26, 50, -11];
const box = document.querySelector('#number-box');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

//* 初始畫面
let boxStr = '';
for (num of numArr) {
    boxStr += '<div class="number-plate">' + num + '</div>';
}
box.innerHTML = boxStr;
const plateArr = document.querySelectorAll('.number-plate');


//* 更新畫面
const deactivateAll = () => {
    for (plate of plateArr) {
        plate.classList.remove('active');
    }
}

let upperBound = 0;
const updateBox = () => {
    deactivateAll();
    upperBound = parseInt(input.value);
//======================= CORE function =====================
    const selectedNumArr = numArr.filter(num => num < upperBound);
//======================= CORE function =====================

    for (num of numArr) {
        if (selectedNumArr.includes(num)) {
            plateArr[numArr.indexOf(num)].classList.add('active');
        }
    }
}

//* 綁定事件
btn.addEventListener('click', updateBox);

input.addEventListener('keydown', e => {
    if (e.keyCode === 13)  updateBox();
})







