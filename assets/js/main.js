const dropTargets = document.getElementsByClassName("drop-target");
const dots = document.getElementsByClassName("color-dot-container");

const dropHandler = (e) => {
    e.preventDefault();
    console.log(e);

    let elementID = e.dataTransfer.getData("elementID");
    console.log(elementID);
    console.log(typeof elementID);
    e.target.appendChild(document.getElementById(elementID));
}

const allowDrop = (e) => {
    e.preventDefault();
}

let currentDot;

for (let i = 0; i < dropTargets.length; i++) {
    dropTargets[i].addEventListener("dragenter", (e) => {
        // e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

    });

    dropTargets[i].addEventListener("dragleave", (e) => {
        // e.target.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    });
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("dragstart", (e) => {
        // console.log(e);
        // console.log(e.target.getAttribute("data-color"));

        let elementID = e.target.id;
        e.dataTransfer.setData("elementID", elementID);
    });
}