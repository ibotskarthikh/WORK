function turnOn() {
    document.getElementById("img").src = "pic_bulbon.gif";
}

function turnOff() {
    document.getElementById("img").src = "pic_bulboff.gif";
}

function changeHTML() {
    document.getElementById("demo2").innerHTML =
        "<b>Hello JavaScript</b>";
}

function changeText() {
    document.getElementById("demo3").innerText =
        "<b>Hello JavaScript</b>";
}

function writeOutput() {
    document.write("Hello JavaScript");
}

function showAlert() {
    window.alert("Hello JavaScript");
}

function showConsole() {
    console.log("Hello JavaScript");
}