const btnArr = document.querySelectorAll('.tab-btn');
const tabArr = document.querySelectorAll('.tab');

//初始內容
let circleStr = '';
for (let i = 0; i < 9; i++) {
    circleStr += '<div class="circle"></div>';
}
for (tab of tabArr) {
    tab.innerHTML = circleStr;
}

//核心功能
for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('click', () => {
        for(let i = 0; i < btnArr.length; i++) {
            tabArr[i].classList.remove('active');
            btnArr[i].classList.remove('active');
        }

        tabArr[i].classList.add('active');
        btnArr[i].classList.add('active');
    });
}
