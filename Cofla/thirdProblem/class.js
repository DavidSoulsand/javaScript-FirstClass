let amount = prompt("How many students are in this class?");
let totalStudents = [];

for (let i = 0; i < amount; i++) {
    totalStudents[i] = [prompt("Student name: " + (i + 1)), 0];
}

const checkAssistance = (name, a)=> {
    let assistant = prompt(name);
    if (assistant.toLowerCase() === "a") {
        totalStudents[a][1]++;
    }
};

for (i = 0; i < 30; i++) {
    for(student in totalStudents){
        checkAssistance(totalStudents[student][0],student);
    }
}

for (student in totalStudents) {
    let result = `${totalStudents[student][0]}:<br>
    ___________Assistants:<b> ${totalStudents[student][1]}<b> <br>
    ___________Absence:<b> ${30 - parseInt(totalStudents[student][1])}<b>`;
    if (30 - totalStudents[student][1] >= 18) {
        result += "<b style='color:red'> You don't have enough assistance</b> <br> <br>";
    } else {
        result += "<br> <br>";
    }
    document.write(result);
}
