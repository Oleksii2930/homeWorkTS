function exchange(sumUAH:number, currencyValues:{currency:string, value:number}[], exchangeCurrency:string):number {
    let chosenCurrency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    if (chosenCurrency) {
        return  sumUAH / currencyValues.length;
    }
    return -1;
}
console.log(exchange(10000,[
    {currency:'USD',value:42},
    {currency:'EUR',value:49}
], 'EUR'));