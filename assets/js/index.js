const headerIcons = document.querySelectorAll(".header-icons-container > i");
let iconCounter = 1;
const menuButton = document.querySelector('.menu');
const navbarButton = document.querySelector('.navbar');

let iconIntervalTimer = setInterval(showHeaderIcons, 2000);

function showHeaderIcons() {
    iconCounter++;

    const activeIcon = document.querySelector(".active-icon");
    activeIcon.classList.remove('active-icon');

    if (iconCounter > headerIcons.length) {
        headerIcons[0].classList.add('active-icon');
        iconCounter = 1;
    }
    else {
        activeIcon.nextElementSibling.classList.add('active-icon');
    }
}

window.onclose = function () {
    clearInterval(iconIntervalTimer)
}

menuButton.addEventListener('click',(e)=>{
    e.target.classList.toggle('show-menu');
    navbarButton.classList.toggle('show-navbar');
})