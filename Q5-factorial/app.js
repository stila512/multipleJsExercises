const monitor = document.querySelector('#monitor');
const input = document.querySelector('#input');
const inputBtn = document.querySelector('#input-btn');
const box = document.querySelector('#box');
const NUM_BUTTONS = 18;

let boxNewChild = '';
for (let i = 0; i < NUM_BUTTONS; i++) {
    boxNewChild += '<li class="col"><div class="num-btn">' + (i + 1) + ' !</div></li>';
}
box.innerHTML = boxNewChild;

const numBtn = document.querySelectorAll('.num-btn');

//======================= CORE function =====================
const factorial = n => (n == 1) ? 1 : n * factorial(n - 1);
//======================= CORE function =====================
//[B]
//     {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

const handleCompute = n => {
    monitor.innerHTML = factorial(n);
}

for (let i = 0; i < NUM_BUTTONS; i++) {
    numBtn[i].addEventListener('click', () => {
        handleCompute(i + 1);
        input.value = i + 1;
    });
}

inputBtn.addEventListener('click',() => {
    handleCompute(input.value);
});

numBtn[0].click();