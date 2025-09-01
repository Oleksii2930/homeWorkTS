class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;

    constructor( id:number,  name:string,  surname:string,  email:string,  phone:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}}
let users:User[] = [
new User(1,"John", "John", 'wiceo@.com', '9712606741'),
new User(2,"John", "John", 'icemo@.com', '9712606741'),
new User(3,"John", "John", 'wicem@.com', '9712606741'),
new User(40,"John", "John", 'fwiceo@.com', '9712606741'),
new User(5,"John", "John", 'wfiemo@.com', '9712606741'),
new User(6,"John", "frodo", 'wicmof@.com', '9712606741'),
new User(7,"John", "John", 'wicemof@.com', '9712606741'),
new User(8,"John", "John", 'wicefmo@.com', '9712606741'),
new User(9,"John", "John", 'wifcemo@.com', '9712606741'),
new User(10,"John", "John", 'wcemo@.com', '9712606741')
];


const filteredUser = users.filter((user)=> user.id %2 === 0);
console.log(filteredUser);

console.log(filteredUser);