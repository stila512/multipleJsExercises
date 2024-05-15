const monitor = document.querySelector('#monitor');
const input = document.querySelector('#input');
const inputBtn = document.querySelector('#btn');
const box = document.querySelector('#box');
const NUM_BUTTONS = 21;

let boxNewChild = '';
for (let i = 0; i < NUM_BUTTONS; i++) {
    boxNewChild += '<li class="col"><div class="num-btn">' + (i + 1) + '</div></li>';
}
box.innerHTML = boxNewChild;

const numBtn = document.querySelectorAll('.num-btn');

const factorial = n => (n === 1) ? 1 : n * factorial(n - 1);
//[B]
//     {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= i;
//     }
//     return result;
// }

const handleCompute = n => {
    console.log(`啊 ${n} 被點了`);
    monitor.innerHTML = factorial(n);
}

for (let i = 0; i < NUM_BUTTONS; i++) {
    numBtn[i].addEventListener('click', () => {
        handleCompute(i + 1);
    });
}

inputBtn.addEventListener('click',() => {
    handleCompute(input.value);
});