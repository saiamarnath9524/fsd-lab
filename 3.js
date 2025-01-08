//Write a function updateEmployeeDetails that takes an object representing an employee’s details and updates their role while maintaining the other properties using the spread operator.
const employee = {name: "Afroz", role: "Developer", age: 28, location: "IN"}
function updateEmployeeDetails(employee) {
    return{
        ...employee,
        role:"Senior Developer"
    }
}
console.log(updateEmployeeDetails(employee))