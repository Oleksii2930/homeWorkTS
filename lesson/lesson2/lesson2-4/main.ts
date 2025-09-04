type UserType = {
    name: string;
    age: number;
    status: boolean;
}
type UserType2 = UserType & {id: number}; //intersechen накладання перетинання

let users:UserType2[] = [
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

type MyFn = (a:number) => void