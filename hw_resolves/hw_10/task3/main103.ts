
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

//@ts-ignore
let currentNumber: number = parseInt(localStorage.getItem('number') || '0', 10);
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());
//@ts-ignore
const target = document.getElementById('target') as HTMLDivElement | null;
if (target) {
    target.innerText = currentNumber.toString();
}
