// class UserGen<T> {
//     id:T;
//     name: string;
//
//     constructor(id: T, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'oleksii');
// let userGen2 = new UserGen<string>("hdeujihc", 'oleksii');
// let userGen3 = new UserGen<{x: boolean }>({x:true}, 'oleksii');
//
// // let arr:Array<number> = [1,3,4];


interface IUserLS {
    id:number;
    name:string;
}
let item = localStorage.getItem("user");

if(item){
    let obg = JSON.parse(item);
    let user: IUserLS = obg as IUserLS;
}
interface IDog {
    sobaka:string;
}


function foobar<T>(key:string):T{
    let obgJSON = localStorage.getItem(key);
    if(obgJSON){
        return  JSON.parse(obgJSON) as T;
    }
    return {} as T;
}
let IDog = foobar<IDog>('dog');

let iUserLS = foobar<IUserLS>('user');

