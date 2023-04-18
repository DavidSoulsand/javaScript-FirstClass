class Mobile {
    constructor(color, weight, size, resolutionCamera, ram) {
        this.color = color;
        this.weight = weight;
        this.size = size;
        this.resolutionCamera = resolutionCamera;
        this.memoryRam = ram;
        this.on = false;
    }
    power() {
        if (this.on == false) {
            alert("Mobile On")
            this.on = true;
        } else {
            alert("The Mobile was On");
        }

    }
    inability() {
        if (this.on == false) {
            alert("Mobile Off")
            this.on = true;
        } else {
            alert("The Mobile was Off");
            this.on = false;
        }

    }
    reboot() {
        if (this.on == true) {
            alert("Reboot the Mobile");
        } else {
            alert("Mobile was Off");
        }
    }
    takePhoto() {
        alert(`Photo made at a resolution of: ${this.resolutionCamera} `)
    }
    filmVideo() {
        alert(`Filming video with: ${this.resolutionCamera}`);
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Weight: <b>${this.weight}</b><br>
        Size: <b>${this.size}</b><br>
        Video resolution: <b>${this.resolutionCamera}</b><br>
        Memory Ram: <b>${this.memoryRam}</b><br>

        
        `
    }
}
class MobileHighClass extends Mobile{
    constructor (color, weight, size, resolutionCamera, ram,resolutionCameraExtra,){
        super(color,weight,size,resolutionCamera,ram);
        this.resolutionCameraExtra = resolutionCameraExtra;
    }   
    filmVideoSlow(){
        alert("You are filming in slow motion");
    }
    faceId(){
        alert("Lets check the face Id")
    }
    infoHighClass(){
        return this.mobileInfo() + `Resolution Camera Extra: <b>${this.resolutionCameraExtra}</b> <br>`;
    }
}

//mobile1 = new Mobile("red", "150g", "5", "Full HD", "3GB");
//mobile2 = new Mobile("black", "142g", "6", "HD", "5GB");
//mobile3 = new Mobile("white", "155g", "6.2", "Full HD", "6GB");
mobile1 = new MobileHighClass("red", "130g", "5.2", "4k", "3GB", "HD");
mobile2 = new MobileHighClass("orange", "100g", "4", "4k", "8GB", "Full HD");
mobile3 = new MobileHighClass("purple", "112g", "4.5", "2k", "6GB","HD");
document.write(`
    ${mobile1.infoHighClass()} <br>
    ${mobile2.infoHighClass()} <br>
    ${mobile3.infoHighClass()} <br>

`);