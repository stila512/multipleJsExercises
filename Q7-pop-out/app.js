const showBtn = document.querySelector('#show-btn');
const closeBtn = document.querySelector('#close-btn');
const popout = document.querySelector('#popout');

showBtn.addEventListener('click', () => {
    popout.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    popout.classList.remove('active');
});