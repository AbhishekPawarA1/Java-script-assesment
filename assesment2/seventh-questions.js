
const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];


//  //   questions 1
var info=products.filter(function(product){
    return product.name==="Laptop";
    
})
console.log(info)


// output={ name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },

    // question 2

var sorting=products.sort(function(a,b){
   return  a.price-b.price;
})
console.log(sorting)


// output 
// Sorted Products by Price:
// [
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
// ]


    // question 3


//  Products with Total Value:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
// ]    


   // question 4


// Inventory Report:
// {
//     totalProducts: 4,
//     totalValue: 17500,
//     avgPrice: 337.5,
//     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
// }   