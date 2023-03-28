let free = false;

const validationClient = (time)=>{
    let age = prompt("How old are you?");
    if (age >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Its free time!!! because your the first person after the 2AM");
            free = true;
        }else{
            alert(`They are ${time}:00 and you can come, but you need buy the ticket`);
        }
    } else{
        alert("You need 18 or over, sorry sir/miss.");
    }
}
validationClient(14);
validationClient(2);