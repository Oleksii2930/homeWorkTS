interface IUser {
    name: string;
    age: number;
    status:boolean;
}

interface IUser {
    id: number;
}

// interface IUser2 extends IUser {
//     id: number;
// }
let users:IUser[] = [
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
    {id:1, name:'vasya', age:20 , status:true},
];