// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const buttons:HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
const button:HTMLButtonElement | undefined = buttons[0];

if (button ) {
    button.onclick = function () {
        const textE1 = document.getElementById('text');
        // document.getElementById('text').style.display = 'none';
        if (textE1){
            textE1.remove();
        }
    }
}