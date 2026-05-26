
/* =========================================
   MOBILE NAVIGATION TOGGLE
========================================= */

const menuBtn =
document.getElementById("menu-btn");

const navLinks =
document.getElementById("nav-links");

/* TOGGLE MENU */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* =========================================
   BUTTON ANIMATION
========================================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "translateY(0px) scale(1)";

    });

});

/* =========================================
   PROJECT CARD HOVER EFFECT
========================================= */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

        card.style.transition =
        "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});

/* =========================================
   SCROLL REVEAL EFFECT
========================================= */

const revealElements =
document.querySelectorAll(
".glass"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

        }

    });

}

/* INITIAL STYLES */

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.8s ease";

});

/* RUN ON PAGE LOAD */

revealOnScroll();