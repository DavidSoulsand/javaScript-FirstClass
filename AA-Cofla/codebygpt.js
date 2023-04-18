class Mobile {
    constructor(color, weight, resolutionScreen, size, resolutionCamera, ram) {
        this.color = color;
        this.weight = weight;
        this.size = size;
        this.resolutionScreen = resolutionScreen;
        this.resolutionCamera = resolutionCamera;
        this.memoryRam = ram;
        this.on = false;
    }

    power() {
        if (!this.on) {
            alert("Mobile On");
            this.on = true;
        } else {
            alert("The Mobile was On");
        }
    }

    inability() {
        if (!this.on) {
            alert("Mobile Off");
            this.on = true;
        } else {
            alert("The Mobile was Off");
            this.on = false;
        }
    }

    reboot() {
        if (this.on) {
            alert("Reboot the Mobile"); 
        } else {
            alert("Mobile was Off");
        }
    }

    takePhoto() {
        alert(`Photo made at a resolution of: ${this.resolutionCamera} `);
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
        `;
    }
}

mobile1 = new Mobile("red", "150g", "5", "5.2", "Full HD", "3GB");
mobile2 = new Mobile("black", "142g", "6", "6", "HD", "5GB");
mobile3 = new Mobile("white", "155g", "6.2", "4", "Full HD", "6GB");

document.write(`
    ${mobile1.mobileInfo()} <br>
    ${mobile2.mobileInfo()} <br>
    ${mobile3.mobileInfo()} <br>
`);
