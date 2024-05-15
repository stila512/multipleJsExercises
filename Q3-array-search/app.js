const listMonitor = document.querySelector('#user-list');
const input = document.querySelector('#input');
const btn = document.querySelector('#search-btn');
const errMonitor = document.querySelector('#error');

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

const findTarget = () => {
    const inputValue = input.value.toLowerCase();
    const target = userList.find(user => user.toLowerCase() === inputValue);
    // errMonitor.innerHTML = target;
    deactivateAll();

    if (target) {
        errMonitor.classList.remove('text-bg-danger');
        errMonitor.classList.add('text-bg-info');
        errMonitor.innerHTML = target + ' is in the list.';
        liArr[userList.indexOf(target)].classList.add('active');
    } else {
        errMonitor.classList.add('text-bg-danger');
        errMonitor.classList.remove('text-bg-info');
        errMonitor.innerHTML = 'There is no ' + inputValue + '.';
    }
}

input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        findTarget();
    }
});
btn.addEventListener('click', findTarget);
