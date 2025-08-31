const sum = (arr:number[]):number => {
    let basket = 0;
    for (const item of arr) {
        basket += item;
    }
    return basket;
}
console.log(sum([1, 2, 3, 4]));