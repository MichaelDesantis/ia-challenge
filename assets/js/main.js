/**
 * Manage Dots and targets
 */

const dropTargets = document.getElementsByClassName("drop-target");
const dots = document.getElementsByClassName("color-dot-container");

const dropHandler = (e) => {
    e.preventDefault();
    let elementID = e.dataTransfer.getData("elementID");
    let color = e.target.getAttribute("data-target-color");

    if (e.target.childElementCount > 0) {
        return;
    }

    if (!elementID.includes(color)) {
        return;
    }
    e.target.appendChild(document.getElementById(elementID));
}

const allowDrop = (e) => {
    e.preventDefault();
}

// for (let i = 0; i < dropTargets.length; i++) {
//     dropTargets[i].addEventListener("dragenter", (e) => {
//         e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
//     });

//     dropTargets[i].addEventListener("dragleave", (e) => {
//         e.target.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
//     });
// }

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("dragstart", (e) => {
        let elementID = e.target.id;
        e.dataTransfer.setData("elementID", elementID);
    });
}

/**
 * Reset
 */
const reset = () => {
    for (let i = 0; i < dropTargets.length; i++) {
        if (dropTargets[i].childElementCount === 0) {
            continue;
        } else {
            let child = dropTargets[i].children[0];
            document.querySelectorAll(`[data-child="${child.id}"]`)[0].appendChild(child)
        }
    }
};

document.getElementById("reset").addEventListener("click" , reset);

 /**
  * Modal
  */