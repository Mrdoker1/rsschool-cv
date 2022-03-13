let element = document.querySelector("#menu-checkbox");

let buttons = [
    document.querySelector("#show-more-works")
];

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        showToggle(button.parentElement.firstElementChild.textContent, button);
    })
})

function MenuHandler() {
    if (element.checked) {
        disableScrolling();
    } else {
        enableScrolling();
    }
}

// disable scrolling
function disableScrolling() {
    document.body.style.overflow = "hidden";
}

// enable scrolling
function enableScrolling() {
    document.body.style.overflow = "visible";
    document.getElementById("menu-checkbox").checked = false;
}

// showToggle
function showToggle(type, button) {

    if (type === 'Works') {

        element = document.getElementById('Works').children[1];

        if (element.classList.contains('hide-content')) {
            element.classList.remove("hide-content");
            element.classList.add("show-content");
            button.textContent = 'Hide';
        } else {
            element.classList.remove("show-content");
            element.classList.add("hide-content");
            button.textContent = 'Show more';
        }
    }
}