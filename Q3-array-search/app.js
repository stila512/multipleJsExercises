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

//======================= CORE function =====================
const findTarget = () => {
    const inputValue = input.value.toLowerCase();
    const target = userList.find(user => user.toLowerCase() === inputValue);
    deactivateAll();
    input.classList.remove('animate__headShake');
    input.classList.remove('animate__tada');
    input.classList.remove('error');

    if (target) {
        liArr[userList.indexOf(target)].classList.add('active');
        input.classList.add('animate__tada');
    } else {
        input.classList.add('animate__headShake');
        input.classList.add('error');
    }
}
//======================= CORE function =====================

input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        findTarget();
    }
});
btn.addEventListener('click', findTarget);
