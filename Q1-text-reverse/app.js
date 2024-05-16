const inputString = document.querySelector("#reverse-input");
const result = document.querySelector('#result');

const exeReverse = (input) => {
    //======================= CORE function =====================
    result.innerHTML = input.split("").reverse().join("");
    //======================= CORE function =====================
    result.classList.add('active');
};

inputString.addEventListener("keydown", () =>{
    result.classList.remove('active');
});
inputString.addEventListener("keyup", function (){
    exeReverse(this.value);
});