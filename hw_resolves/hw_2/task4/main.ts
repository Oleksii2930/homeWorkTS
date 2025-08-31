type User = {
    name: string;
    username: string;
    password: string;
}
let users: User[] = [
    { name: "Ivan", username: "ivan123", password: "pass123" },
    { name: "Olena", username: "olena456", password: "secure456" },
    { name: "Oksana", username: "oksana789", password: "abc789" },
    { name: "Petro", username: "petro321", password: "petroPass" },
    { name: "Marta", username: "marta654", password: "marta2024" },
    { name: "Andrii", username: "andrii007", password: "bond007" },
    { name: "Nina", username: "nina999", password: "ninaSecure" },
    { name: "Dmytro", username: "dima888", password: "dimaPass" },
    { name: "Sofia", username: "sofia777", password: "sof123" },
    { name: "Taras", username: "taras333", password: "tarasSecret" }
];


console.log(users[0]);
console.log(users[1]["password"]);
console.log(users[2]["password"]);
console.log(users[3]["password"]);
console.log(users[4]["password"]);
console.log(users[5]["password"]);
console.log(users[6]["password"]);
console.log(users[7]["password"]);
console.log(users[8]["password"]);
console.log(users[9]["password"]);