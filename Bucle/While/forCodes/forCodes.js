
for (let i = 0; i < 6; i++ ){
    
    if (i == 4) {
        continue;
    }
    document.write(i + "<br>");
}

document.write("------------------------------------------------" + "<br>")



let animals = ["dog","cat","rabbit"];
animals.age = 20;

for (animal in animals) {
    document.write(animals[animal] + "<br>");

    }
for (animal of animals) {
    document.write(animal + "<br>");
    }

document.write(animals.age)