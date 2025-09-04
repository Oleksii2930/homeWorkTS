let currentNumber: number = parseInt(localStorage.getItem('number') || '0', 10);

// збільшуємо число
currentNumber += 1;

// зберігаємо назад у localStorage
localStorage.setItem('number', currentNumber.toString());

// вставляємо у box, якщо він існує
const box = document.getElementById('box');
if (box) {
    box.innerText = currentNumber.toString();
}
