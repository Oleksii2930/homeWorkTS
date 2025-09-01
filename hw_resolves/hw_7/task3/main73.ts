class User7 {
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
let users73:User7[] = [
    new User7(1,"John", "John", 'wiceo@.com', '9712606741'),
    new User7(2,"John", "John", 'icemo@.com', '9712606741'),
    new User7(3,"John", "John", 'wicem@.com', '9712606741'),
    new User7(40,"John", "John", 'fwiceo@.com', '9712606741'),
    new User7(5,"John", "John", 'wfiemo@.com', '9712606741'),
    new User7(6,"John", "frodo", 'wicmof@.com', '9712606741'),
    new User7(7,"John", "John", 'wicemof@.com', '9712606741'),
    new User7(9,"John", "John", 'wifcemo@.com', '9712606741'),
    new User7(10,"John", "John", 'wcemo@.com', '9712606741')
];

console.log(users73.sort((user1, user2)=>user1.id - user2.id));