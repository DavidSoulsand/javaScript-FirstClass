class App {
    constructor(download, score, weight) {
        this.download = download;
        this.score = score;
        this.weight = weight;
        this.started = false;
        this.installed = false;
    }
    install() {
        if (this.installed == false) {
            this.installed = true;
            alert("Installing App");
        }
    }
    uninstall() {
        if (this.installed == true) {
            this.installed = false;
            alert("Uninstalling App");
        }
    }
    open() {
        if (this.started == false && this.installed == true) {
            this.started = true;
            alert("Starting app");
        }
    }
    close() {
        if (this.started == true && this.installed == true) {
            this.started = false;
            alert("Closing app");
        }
    }
    appInfo(){
        return `
        Downloads: <b>${this.download}</b><br>
        Score: <b>${this.score}</b><br>
        Weight: <b>${this.weight}</b><br>`;
    }

}

app = new App("2000", "5 ★", "1Gb");
app2 = new App("1000", "1 ★", "5Gb");
app3 = new App("20000", "2 ★", "4Gb");
app4 = new App("20200", "4 ★", "32Gb");
app5 = new App("255000", "2 ★", "20Gb");
app6 = new App("2777000", "4.5 ★", "12Gb");
app7 = new App("9999000", "2 ★", "155Gb");

app.install();
app.open();
app.close();
app.uninstall();

document.write(
    `${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `
);
document.write("Hello World");


