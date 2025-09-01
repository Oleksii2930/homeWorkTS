
class Client {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order:Product[];

    constructor(id:number, name:string, surname:string , email:string, phone:string, order:Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
class Product {
    title: string;
    price: number;

    constructor(title:string, price:number) {
        this.title = title;
        this.price = price;
    }
}
let clients =[
    new Client(1,'awerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}, {title:'phone', price: 3100}]),
    new Client(2,'bwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(3,'cwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(4,'dwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(5,'ewerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(6,'fwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(7,'gwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}, {title:'phone', price: 3100}]),
    new Client(8,'hwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}]),
    new Client(9,'jwerty', 'asd','wcemo@.com',  '9712606741', [{title:'tv', price: 1100}, {title:'phone', price: 3100}])
];
const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);