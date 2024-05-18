const listMonitor = document.querySelector('#user-list');
const input = document.querySelector('#input');
const btn = document.querySelector('#search-btn');

const userList = [
    'Angela', 'Angelina', 'Kevin', 'Kelvin', 'Paul', 'Sue', 'James', 'Oliviana', 'Olivia'
];
listMonitor.innerHTML = userList
    .map(user => `<li class="user">${user}</li>`)
    .join('');

const liArr = document.querySelectorAll('.user');

const deactivateAll = () => {
    for (let li of liArr) {
        li.classList.remove('active');
    }
}
let setTimeId;
//======================= CORE function =====================
const findTarget = () => {
    const inputValue = input.value.toLowerCase();
    const target = userList.find(user => user.toLowerCase() === inputValue);
    input.value = inputValue.slice(0, 1).toUpperCase() + inputValue.slice(1);
    deactivateAll();
    if(setTimeId) clearTimeout(setTimeId);

    if (target) {
        input.classList.remove('error');
        liArr[userList.indexOf(target)].classList.add('active');
        input.classList.add('animate__tada');
    } else {
        input.classList.add('animate__headShake');
        input.classList.add('error');
    }

    setTimeId = setTimeout(() => {
        input.classList.remove('animate__headShake');
        input.classList.remove('animate__tada');
        input.classList.remove('error');
    }, 1000);
}
//======================= CORE function =====================

input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        findTarget();
    }
});
btn.addEventListener('click', findTarget);
