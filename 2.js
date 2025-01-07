//Create a function calculateTotal that takes an arbitrary number of numeric values(using the rest operator) and returns their sum.

function calculateTotal(...args)
{
    return args.reduce((a, b) => a + b, 0);
}
let arr=[10,20,30,40]
console.log(calculateTotal(arr))
