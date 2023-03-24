let fruits = ["Banana", "Orange", "Apple", 10, 11, 242, 40, "Mango"];
let pc = {
    name:"Asus",
    cpu: "Ryzen 5 3600",
    ram: "16gb",
    disk:"2TB"
};
let pcA = ["Msi ", " Ryzen 5 5700", " 32gb", " 1TB "];
let name = pc["name"];
let cpu = pc["cpu"];
let ram = pc["ram"];
let disk = pc["disk"];



document.write(pcA);
document.write("<br>")



let phrase = `The name of my PC is: <b>${name}</b> <br>
The Cpu is: <b>${cpu}</b> <br>
The Ram is: <b>${ram}</b> <br>
The Disk is <b>${disk}</b> <br>
`;
document.write(phrase)