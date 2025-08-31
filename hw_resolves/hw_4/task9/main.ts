type CreateType = {
    id: number,
    name: string,
    age:  number,
}
function foobar (users:CreateType[]):void {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
foobar([
    {id:1, name: 'ivan', age: 21},
    {id:2, name: 'ivan', age: 21},
    {id:3, name: 'ivan', age: 21},
    {id:4, name: 'ivan', age: 21},
    {id:5, name: 'ivan', age: 21}

]);