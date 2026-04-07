//function hoisting
sayMyName("Babbs");

function sayMyName(name)
{
    console.log(name);
}

//variable hoisting
console.log(age);
var age=45;

//func as arg
function greetMe(greet,fullName)
{
    console.log("hello",fullName);
    greet();
}
function greet()
{
    console.log("hi duniuya");
}
greetMe(greet,"sid");

//returning func
function solve(number)
{
    return function(number)
    {
        return number*number;
    }
}
let ans=solve(5);
