// let a: string = 'hello world';
// let arr: number[] = [];

//1 типи
// type UserType = {
//     name: string,
//     age: number,
//     status: boolean,
//     greeting: (str: string) => string,
// }

//2 інтерфейси
// interface UserType  {
//     name: string,
//     age: number,
//     status: boolean,
//     greeting: (str: string) => string,
// }
// let users: UserType[] = [
//     {greeting: (str) => 'hello', name: 'vasya', age: 21, status: false},
//     {greeting: (str) => 'hello2', name: 'oleh', age: 23, status: false}
// ];

//3
class User  {
    name: string;
    age: number;
    status: boolean;
constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
}


    greeting() {
    console.log('Hello World!');
    }
}
let user: User = new User('asd', 21, false);

let users: User[] = [
  new User('asdfg', 23, true)
];
console.log(users);