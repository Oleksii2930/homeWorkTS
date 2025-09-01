interface Popelushka {
    name: string;
//     age: number;
}
class popelushka {
    name:string;
    age:number;
    footsize:number
    constructor(name:string, age:number, footsize:number) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
class Prince {
    name: string;
    age:number;
    slipper:number;
    wife?:Popelushka;
    constructor(name:string, age:number, slipper:number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper ;
    }
}
const popelushkas:popelushka[] =[
    new popelushka('ola', 18, 23),
    new popelushka('ola', 19, 23),
    new popelushka('ola', 17, 24),
    new popelushka('ola', 28, 25),
    new popelushka('ola', 38, 22),
    new popelushka('olala', 21, 21),
    new popelushka('ola', 22, 25),
    new popelushka('ola', 24, 23),
    new popelushka('ola', 20, 26),
    new popelushka('ola', 18, 27),
];
const prince:Prince = new Prince('qwrrt', 1234, 21);
// for (const popelushka of popelushkas) {
// if (popelushka.footsize === prince.slipper) {
//     prince.wife = popelushka;
// }
// }
console.log(prince);
const find = popelushkas.find(popelushka => popelushka.footsize === prince.slipper);
prince.wife = find;
if (find) {find?.age;
    }
console.log(find);