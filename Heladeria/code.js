moneyMike = prompt("How much money do you have Mike?");
moneyPedro = prompt("How much money do you have Pedro?");
moneyRobert= prompt("How much money do you have Robert?");
if (moneyMike >= 0.6 && moneyMike < 1) {
    alert("Buy a Vanilla Ice Cream Mike");
    alert("I give u back => "+ (moneyMike - 0.6));
}
else if (moneyMike >= 1 && moneyMike < 1.6){
    alert("Buy a Chocolate Ice Cream Mike");
    alert("I give u back => "+ (moneyMike - 1));
}
else if (moneyMike >= 1.6 && moneyMike < 1.7){
    alert("White CHocolate Ice Cream Mike");
    alert("I give u back => "+ (moneyMike - 1.6));
}
else if (moneyMike >= 1.7 && moneyMike < 1.8){
    alert("Buy a Orange Ice Cream Mike");
    alert("I give u back => "+ (moneyMike - 1.7));
}
else if (moneyMike >= 1.8 && moneyMike < 2.9){
    alert("Buy a Lemon Ice Cream Mike");
    alert("I give u back => "+ (moneyMike - 1.8));
}
else if (moneyMike >= 2.9){
    alert("Buy a Chocolate Cube or Vanilla Cube Mike");
    alert("I give u back => "+ (moneyMike - 2.9));
}
else{
    alert("You don't have enough money for buy anything Mike");
}

if (moneyPedro >= 0.6 && moneyPedro < 1) {
    alert("Buy a Vanilla Ice Cream Pedro");
}
else if (moneyPedro >= 1 && moneyPedro < 1.6){
    alert("Buy a Chocolate Ice Cream Pedro");
}
else if (moneyPedro >= 1.6 && moneyPedro < 1.7){
    alert("White CHocolate Ice Cream Pedro");
}
else if (moneyPedro >= 1.7 && moneyPedro < 1.8){
    alert("Buy a Orange Ice Cream Pedro");
}
else if (moneyPedro >= 1.8 && moneyPedro < 2.9){
    alert("Buy a Lemon Ice Cream Pedro");
}
else if (moneyPedro >= 2.9){
    alert("Buy a Chocolate Cube or Vanilla Cube Pedro");
}
else{
    alert("You don't have enough money for buy anything Pedro");
}
if (moneyRobert >= 0.6 && moneyRobert < 1) {
    alert("Buy a Vanilla Ice Cream Robert");
}
else if (moneyRobert >= 1 && moneyRobert < 1.6){
    alert("Buy a Chocolate Ice Cream Robert");
}
else if (moneyRobert >= 1.6 && moneyRobert < 1.7){
    alert("White CHocolate Ice Cream Robert");
}
else if (moneyRobert >= 1.7 && moneyRobert < 1.8){
    alert("Buy a Orange Ice Cream Robert");
}
else if (moneyRobert >= 1.8 && moneyRobert < 2.9){
    alert("Buy a Lemon Ice Cream Robert");
}
else if (moneyRobert >= 2.9){
    alert("Buy a Chocolate Cube or Vanilla Cube Robert");
}
else{
    alert("You don't have enough money for buy anything Robert");
}

