const numberInput = document.querySelector('#star-number');
const btn = document.querySelector('#btn');
const monitor = document.querySelector('#monitor');
const COL_BOUND = 10;
const SIGN = '☆';

//======================= CORE function =====================
const drawStars = () => {
    const target = parseInt(numberInput.value);
    if (isNaN(target)) {
        monitor.innerHTML = '還沒有輸入數量哦';
        return;
    }
    if (target <= 0) {
        monitor.innerHTML = '請輸入正常的數量哦';
        return;
    }

    const rowNum = Math.floor(target / COL_BOUND);
    const restNum = target % COL_BOUND;
    let star_row = '';
    for (let i = 0; i < COL_BOUND; i++) {
        star_row += SIGN;
    }
    const lineIndex = n => `<span class="line-index">${n}</span>&nbsp;`;
    let output = '';

    //滿排的部份
    if (rowNum > 0) {
        for (let i = 0; i < rowNum; i++) {
            output += '<p>' + lineIndex(i + 1) + star_row + '</p>';
        }
    }

    //零星的部份
    if (restNum > 0) {
        let star_rest = '';
        for (let i = 0; i < restNum; i++) {
            star_rest += SIGN;
        }
        output += '<p>' + lineIndex(rowNum + 1) + star_rest + '</p>';
    }
    monitor.innerHTML = output;
};
//======================= CORE function =====================

btn.addEventListener('click', drawStars);
numberInput.addEventListener('keyup', e => {
    if (e.keyCode === 13) drawStars();
})