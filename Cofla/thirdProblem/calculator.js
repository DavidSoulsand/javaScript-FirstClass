const summary = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const subtraction = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplication = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("What operation do you need?");
operation = prompt("1: Summary , 2:Subtraction, 3: Division, 4:Multiplication");

if (operation == 1){
    let number1 = prompt("First number to summary");
    let number2 = prompt("Second number to summary");
    result = summary(number1,number2);
    alert(`Your result is: ${result}`);

}else if(operation == 2){
    let number1 = prompt("First number to subtraction");
    let number2 = prompt("Second number to subtraction");
    result = subtraction(number1,number2);
    alert(`Your result is: ${result}`);

}else if(operation == 3){
    let number1 = prompt("First number to division");
    let number2 = prompt("Second number to division");
    result = division(number1,number2);
    alert(`Your result is: ${result}`);

}else if(operation == 4){
    let number1 = prompt("First number to multiplication");
    let number2 = prompt("Second number to multiplication");
    result = multiplication(number1,number2);
    alert(`Your result is: ${result}`);     
}else{
    alert("Error 404");
}

