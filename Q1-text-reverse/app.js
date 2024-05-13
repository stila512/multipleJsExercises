const inputString = document.querySelector("#reverse-input");
const result = document.querySelector('#result');

const exeReverse = (input) => {
    const charArr = input.split("");
    result.innerHTML = charArr.reverse().join("");
    result.classList.add('active');
};

inputString.addEventListener("keydown", () =>{
    result.classList.remove('active');
});
inputString.addEventListener("keyup", function (){
    exeReverse(this.value);
});