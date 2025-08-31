const foobar7 = (numbers:number[]):number => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(foobar7([1, 2, 3, 4, -23, 34, -45, 780]));