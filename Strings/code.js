
let string = "string test";
let string2 = "test";

result = string.endsWith(string2);

document.write(result);

//Corrección de Chatgpt
let string3 = "string test";
let string4 = "string";

let result2 = string3.startsWith(string4);


let coma = "<br>"+"List items: Tomatoes, Potatoes, Oranges";
let alphabet = "ABCDEF";
//let resultComa = coma.split(",");
//let resultComa = alphabet.substring(0,5);
let resultComa = alphabet.toLowerCase();


document.write("<br>"+resultComa); // output: true

let names = ["Dave","John","Michael"];
//let resultNames = names.pop();
//let resultNames = names.shift();

document.write("<br>The original Array: <b>" +names+ "</b><br>");
//document.write("<br>The element popped: <b style='color:orange'>"+resultNames+"</b><br>");
//document.write("<br>The result is: "+names);
let resultNames = names.push("John","Alfa");
document.write("<br>Push is <b>"+resultNames+"</b><br>");

numbers = [1,2,3,4,5];
document.write(numbers);
let reverseNumbers = numbers.reverse();
document.write("<br>"+reverseNumbers+"<br>")
hundredNumbers = [1,2,3,45,121,312,3,21,31234,14,124,123,231];
document.write(hundredNumbers+"<br>"+"<br>")
let randomNumbers = hundredNumbers.sort();
document.write(randomNumbers+"<br>");

let spliceNames = ["Alphabet","Apple","Orange","Onion","Sugar"];
document.write(spliceNames);
spliceNames.splice(1,3,"Mango");
document.write("<br>"+spliceNames);

