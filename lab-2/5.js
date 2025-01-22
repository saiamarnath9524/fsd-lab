//Write a function updateProductInfo that extracts the id and name properties from a product object and then adds new properties (discount and inStock) using the spread operator.
const product = {
    id: 101, 
    name: "Laptop", 
    price: 1000, 
    category:  "Electronics"
}
function updateProductInfo(product) {
    return{
        ...product,
        discount: 10,
        inStock: true
    }
}
console.log(updateProductInfo(product))