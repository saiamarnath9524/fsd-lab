
// Question 2: Create three functions that take a number, multiply it by 2,
// subtract 3, and then add 10. Use callbacks to chain these operations together.

function select(num,callback)
{
    callback(num)
}
function multiply(num)
{
    var num1=num*2
    console.log(num1)
}
function subtract(num,callback)
{
    var num2=num-3
    console.log(num2)
}
function add(num,callback)
{
    var num3=num+10
    console.log(num3)
}

select(9,multiply)
select(9,subtract)
select(9,add)
