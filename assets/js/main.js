const dropTargets = document.getElementsByClassName("drop-target");
const dots = document.getElementsByClassName("color-dot-container");
const modal = document.getElementsByClassName("modal-overlay")[0];

/**
 * Modal
 */
const showModal = () => {
    modal.classList.add("active");
}

const hideModal = () => {
    modal.classList.remove("active");
};

modal.addEventListener("click", hideModal);

/**
 * Win condition
 */
const win = () => {
    let win = true;
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].children[0]) {
            win = false;
            break;
        }
    }

    return win;
};

 /**
 * Manage Dots and targets
 */
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
    if (win()){
        showModal();
    }
}

const allowDrop = (e) => {
    e.preventDefault();
}

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
