const result = document.querySelector('#result');

const exeReverse = (input) => {
    const charArr = input.split("");
    result.innerHTML = charArr.reverse().join("");
};

const inputString = document.querySelector("#reverse-input");
inputString.addEventListener("keyup", e => exeReverse(e.value));