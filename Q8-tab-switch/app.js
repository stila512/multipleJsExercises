const btnArr = document.querySelectorAll('.tab-btn');
const pageArr = document.querySelectorAll('.page');
const diceArr = document.querySelectorAll('.dice');

//初始內容
let circleStr = '';
for (let i = 0; i < 9; i++) {
    circleStr += '<div class="circle"></div>';
}
for (dice of diceArr) {
    dice.innerHTML = circleStr;
}

//核心功能
//======================= CORE function =====================
for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('click', () => {
        for(let i = 0; i < btnArr.length; i++) {
            pageArr[i].classList.remove('active');
            btnArr[i].classList.remove('active');
        }

        pageArr[i].classList.add('active');
        btnArr[i].classList.add('active');
    });
}
//======================= CORE function =====================
