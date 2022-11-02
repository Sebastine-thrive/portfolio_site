/*===== Resize Navbar on Scroll =====*/
let navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
window.onscroll = () => {
    this.scrollY > -0.5 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".menu-btn");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}
// closing menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))



// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Dark Mode functionality

function changeMode() {
    let bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
};

// let theme = localStorage.getItem('data-theme');


// const changeThemeToDark = () => {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('data-theme', 'dark')
// }

// const changeThemeToLight = () => {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('data-theme', 'light')
// }

// const switchButton = document.getElementById('switchButton');
// switchButton.addEventListener('change', () => {
//     let theme = localStorage.getItem('data-theme');
//     if (theme ==='dark') {
//         changeThemeToLight();
//     } else {
//         changeThemeToDark();
//     }
// })


