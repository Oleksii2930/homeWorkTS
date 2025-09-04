// // – створити блок,
// //
const div:HTMLDivElement = document.createElement('div');
// // – додати йому класи wrap, collapse, alpha, beta
// //
div.classList.add('wrap','collapse','alpha');
div.classList.add('alpha');
div.classList.add('beta');
//
// // – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// //
//
// // – додати цей блок в body.
// //
document.body.appendChild(div);
const cloneNode = div.cloneNode(true);
// // – клонувати його повністю, та додати клон в body.
// //
 document.body.append(div, cloneNode);