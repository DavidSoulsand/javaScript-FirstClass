//number = Math.max(2,1,34214,22,12,4,555);
number = Math.random()*100;
number = number.toString();
num = number[0] + number[1];
if (number[1] == ".") {
    num = number[0];
}
document.write(num);
document.write("<br>"+"Hello World")