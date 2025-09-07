// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// const input = document.getElementById('xxx');
// const resultDiv = document.getElementById('result');
// input.oninput = function () {
//     resultDiv.innerText = +this.value * 2.2;
//
// };

const input = document.getElementById('xxx') as HTMLInputElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
//@ts-ignore
input.oninput = function (this: HTMLInputElement) {
    const value:number = +this.value;
    resultDiv.innerText = (value * 2.2).toString();
};