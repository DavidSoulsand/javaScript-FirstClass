let numberForAdd = 0;

while (numberForAdd < 6) {
    numberForAdd++;
    document.write("<br>"+numberForAdd+ "<br>");
}

let numberForAddDo = 0;

do {
    numberForAddDo++;
    document.write(numberForAddDo)
} while (numberForAddDo <= 6);


let add  = 0;

while (add < 1000) {
    add++;
    document.write("<br>")
    document.write(add);
    if (add == 10) {
        break;
    }
}
document.write("<br>"+"End")

