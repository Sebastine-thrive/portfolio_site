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

// Animations

// const faders = document.querySelector(".fade-in");
// const sliders = document.querySelectorAll(".slide-in")
// const appearOptions = {
//     threshold: 0,
//     rootMargin: '0px 0px -250px 0px'
// };
// const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             entry.target.classList.add("appear");
//             appearOnScroll.unobserve(entry.target)
//         }
//     })
// }, appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// });

// sliders.forEach(slider=> {
//     appearOnScroll.observe(slider)
// })

const skills = document.querySelectorAll(".skill"), slider = document.querySelectorAll(".footer-note"),
    homeText = document.querySelectorAll(".home-text"), names = document.querySelectorAll(".my_name"),
    quotes = document.querySelectorAll(".quote"),
    contactItems = document.querySelectorAll(".contact-item"),
    footerSocials = document.querySelectorAll(".footer-social"),
    portfolioTitle = document.querySelectorAll(".portfolio-title"),
    contactTitle = document.querySelectorAll(".contact-title")




// const rights = document.querySelectorAll(".right")

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.5
})

skills.forEach(skill => {
    fadeObserver.observe(skill)
})


const downSlideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("move-down", entry.isIntersecting)
    })
}, {
    threshold: 0.5
})


const upSlideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("move-up", entry.isIntersecting)
    })
}, {
    threshold: 0.5
})


const zoomInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("zoom-in", entry.isIntersecting)
        if (entry.isIntersecting) {
            zoomInObserver.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})



const moveRightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("move-right", entry.isIntersecting)
    })
}, {
    threshold: 0.8
})



const moveLeftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("move-left", entry.isIntersecting)
    })
}, {
    threshold: 0.8
})


const alternateMovement = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("move-left-and-right", entry.isIntersecting)
    })
}, {
    threshold: 1
})
quotes.forEach(item => {
    alternateMovement.observe(item)
})

slider.forEach(item => {
    downSlideObserver.observe(item)
})

footerSocials.forEach(item => {
    upSlideObserver.observe(item)
})

homeText.forEach(item => {
    zoomInObserver.observe(item)
})

names.forEach(item => {
    downSlideObserver.observe(item)
})

portfolioTitle.forEach(item => {
    moveRightObserver.observe(item)
})

contactItems.forEach(item => {
    zoomInObserver.observe(item)
})

contactTitle.forEach(item => {
    moveLeftObserver.observe(item)
})



// Dark Mode functionality

function changeMode() {
    let bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
};
