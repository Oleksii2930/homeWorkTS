// let a: string = 'hello world';
// let arr: number[] = [];

type UserType = {
    name: string,
    age: number,
    status: boolean,
    greeting: (str: string) => string,
}
let users: UserType[] = [
    {greeting: (str) => 'hello', name: 'vasya', age: 21, status: false},
    {greeting: (str) => 'hello2', name: 'oleh', age: 23, status: false}
];