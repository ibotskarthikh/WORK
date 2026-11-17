const box1 = document.getElementById("imgbox1");
const box2 = document.getElementById("imgbox2");

function removeElement() {
    box1.style.display = "none";
}

function changeVisibility() {
    box2.style.visibility = "hidden";
}

function resetElement() {
    box1.style.display = "block";
    box2.style.visibility = "visible";
}