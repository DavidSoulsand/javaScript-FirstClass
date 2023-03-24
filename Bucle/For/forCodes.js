array1 = ["Maria","Lucia","Marta"];
array2 = ["Pedro", "Alvaro", array1, "Mario"];

forThink:
for (let array in array2) {
    if (array == 2) {
        for(let array of array1){
            if (array == "Maria") {
                continue forThink;
            } 
            document.write(array + "<br>")
        }
        
    } else {
        document.write(array2[array]+ "<br>");
    }
}
    
