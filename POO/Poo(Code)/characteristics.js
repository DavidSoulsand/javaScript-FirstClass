class Animal{
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `I am ${this.specie}, i have ${this.age} years old and my color is ${this.color}.`;
    }

    seeInfo(){
        document.write(this.info + "<br>");
    }
}
class Dog extends Animal{
    constructor(specie,age,color,race){
        super(specie,age,color,race);
        this.race = null;
    }
    set setRace(newName){
        this.race = newName;
    }
    get getRace(){
        return this.race;
    }
}
const dog = new Dog("dog", 5, "Brown", "Dobberman");
//const dog = new Dog ("Dog", 12, "Brown", "Pitbull");
const cat = new Animal ("Cat", 3, "Black");
const snake = new Animal ("Snake", 5, "Green");

dog.seeInfo();
snake.seeInfo();
dog.setRace = "John";
document.write(dog.race);

document.write("<br>"+dog.getRace);
