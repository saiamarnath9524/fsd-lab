//Write a function createProfile that accepts an object with name, age, email, and address. Use object destructuring to extract the name and email and return a new object containing only the name and email.
let p={
    name:"Amarnath",
    age:25,
    email:"amarnath@gmail"
}
function createProfile(p)
{
    let {name,email}=p;
    return {name,email};
}
console.log(createProfile(p));