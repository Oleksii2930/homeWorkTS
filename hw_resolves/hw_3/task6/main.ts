type ProductType = {
    title: string,
    price: number,
    image: string,
}
let products: ProductType[] = [

    {title: 'milk',
    price: 22,
        image: 'https://tse2.mm.bing.net/th/id/OIP.xzmgPO3pElF35nhfScuAuwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
{
    title: 'juice',
    price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},

{
    title: 'tomato',
    price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},

{
    title: 'tea',
    price: 15,
        image: "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png"
},

];
 for (let i = 0; i < products.length; i++) {
     document.write(`
<div class="product-card">
<h3 class="product-title">${products[i].title}. Price-${products[i].price}
${products[i].image}</h3>
`)
}
