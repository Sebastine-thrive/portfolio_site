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


/*===== Scroll Section Active Link =====*/

// const Section = document.querySelectorAll('section[id]')
// function scrollActive() {
//     const scrollY = window.pageYOffset
//     Section.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
//         }
//         else {
//             document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


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



function rotateName() {
    let item = document.getElementsByClassName('home-text');
    item.animate([
        {transform:'scale(1)', background:'blue', opacity:.5, offset:.2},
        { transform: 'scale(.8) rotate(270deg)', background: 'blue', opacity: .5, offset: .2 },
        { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },

    ],{
        duration:2000,
        easing:'ease-in-out',
        delay:10,
        iterations: 3,
        direction: 'alternate',
        fill:'forwards'

    })

}