
class animal {
    constructor(species, age, color) {
        this.species = species;
        this.age = age;
        this.color = color;
        this.info = `I'm ${this.species}, i have ${this.age} years old and my color is ${this.color}`;
    }
        seeInformation(){
            document.write(this.info)
    }
}
jumpBr = ()=>{
    document.write("<br>");
}
let dog = new animal("Dog", "10", "Brown");
let frog = new animal("Frog", "1", "Purple");
let snake = new animal("Snake", "1222", "Yellow");
let cat = new animal("Cat", "10", "Purple");

//document.write(frog.info + "<br>");
//document.write(snake.info + "<br>");
//document.write(cat.info + "<br>");

dog.seeInformation();
document.write("<br>");
frog.seeInformation();

cat.seeInformation(jumpBr());
snake.seeInformation(jumpBr());


