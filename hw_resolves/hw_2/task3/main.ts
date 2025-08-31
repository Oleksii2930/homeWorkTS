type Author = {name:string, age:number};
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
};

let book4:Book = {title:'asd', pageCount:123, genre:"add", authors:[{name:"fsds", age: 1232}]}
let book5:Book = {title:'2134', pageCount:42121, genre:"sdfvz", authors:[{name:"avd", age:123}]}
// let book6 = {title:'', pageCount:"", genre:"", authors:[{name:"", age:""}]};