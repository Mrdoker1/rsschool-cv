var element = document.querySelector("#menu-checkbox");


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