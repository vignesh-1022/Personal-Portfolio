/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/* ==========================================
   AOS
========================================== */

AOS.init({

    duration: 1000,

    once: true

});


/* ==========================================
   TYPING EFFECT
========================================== */

const words = [

    "Software Developer",

    "Python Developer",

    "Web Developer",

    "Frontend Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   STICKY NAVBAR
========================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background = "rgba(8,12,30,.75)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn, .resume-btn, .project-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const profileImage = document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("mousemove", () => {

        profileImage.style.transform = "scale(1.03)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1)";

    });

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cWelcome to Vignesh J Portfolio",
"color:#00e5ff;font-size:20px;font-weight:bold;");

console.log("%cDesigned using HTML, CSS, JavaScript & Bootstrap",
"color:#ffffff;font-size:14px;");


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully ✅");

});