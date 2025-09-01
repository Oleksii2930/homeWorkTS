interface Array<T> {
    myFilter(callbak: (value: T) => boolean): T[];
}
Array.prototype.myFilter = function <T> (predicate:(value:T) => boolean):T[]  {
const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};
type User79 = {name:string, age:number, status:boolean};
//ts-ignore

let usersxxx:User79[] = [
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
    {name:'vasya', age:25, status:false},
];
const result = usersxxx.myFilter((user)=>user.status);
console.log(result);