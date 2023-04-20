
const add = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const subtraction = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multiplication = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("What do you need?");

let operation = prompt("1: Add, 2: Substaction, 3: Multiplication, 4: Division");

if (operation == 1) {
    let number1 = prompt("First number to add?");
    let number2 = prompt("Second number to add?");
    result = add(number1,number2);
    alert("Your result is: "+result);
}
if (operation == 2) {
    let number1 = prompt("First number to add?");
    let number2 = prompt("Second number to add?");
    result = subtraction(number1,number2);
    alert("Your result is: "+result);
}
if (operation == 3) {
    let number1 = prompt("First number to add?");
    let number2 = prompt("Second number to add?");
    result = multiplication(number1,number2);
    alert("Your result is: "+result);
}
if (operation == 4) {
    let number1 = prompt("First number to add?");
    let number2 = prompt("Second number to add?");
    result = add(number1,number2);
    alert("Your result is: "+result);
}