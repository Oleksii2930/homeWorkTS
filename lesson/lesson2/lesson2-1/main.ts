// let elementsByClassNameTarget:HTMLCollectionOf<Element> = document.getElementsByClassName('target');
// console.log(elementsByClassNameTarget);
//
//
// let elementsByTagNameDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div')
// // for (let div of elementsByTagNameDiv) {
// //     div.
// // }
// console.log(elementsByTagNameDiv);
//
// let forms:HTMLCollectionOf<HTMLFormElement>=document.forms;
// let f1:HTMLFormElement = forms[0];
// console.log(f1.username);
// console.log(f1['username']); // динамічний ключ


// let p: HTMLParagraphElement = document.createElement('p')

//@ts-ignore
type UserType = {
    name: string,
    age: number,
    status:boolean,
}
//@ts-ignore
let users:UserType[] = [
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
    {name:'vasya', age:20 , status:true},
];

for (const user of users) {
    let div:HTMLDivElement = document.createElement('div');
    div.innerText = user.name;
    document.body.appendChild(div);
}


function appender(tag:keyof HTMLElementTagNameMap) {
    document.createElement(tag)
}