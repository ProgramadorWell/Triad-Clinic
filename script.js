/* =========================================
   TRIAD CLINIC
   INTERAÇÕES
========================================= */


/* =========================================
   HEADER
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const menu =
    document.getElementById("menu");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   FAQ
========================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("open");

            otherItem
                .querySelector(".faq-answer")
                .style.maxHeight = null;

        });


        if (!isOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================
   DEPOIMENTOS
========================================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const prevButton =
    document.getElementById(
        "prevTestimonial"
    );

const nextButton =
    document.getElementById(
        "nextTestimonial"
    );

const dotsContainer =
    document.getElementById(
        "sliderDots"
    );


let currentTestimonial = 0;


/* criar dots */

testimonials.forEach((_, index) => {

    const dot =
        document.createElement("span");

    dot.classList.add("slider-dot");

    if (index === 0) {

        dot.classList.add("active");

    }


    dot.addEventListener("click", () => {

        currentTestimonial = index;

        showTestimonial();

    });


    dotsContainer.appendChild(dot);

});


const dots =
    document.querySelectorAll(".slider-dot");


function showTestimonial() {

    testimonials.forEach(
        testimonial => {

            testimonial.classList.remove(
                "active"
            );

        }
    );


    dots.forEach(
        dot => {

            dot.classList.remove(
                "active"
            );

        }
    );


    testimonials[
        currentTestimonial
    ].classList.add("active");


    dots[
        currentTestimonial
    ].classList.add("active");

}


nextButton.addEventListener("click", () => {

    currentTestimonial++;

    if (
        currentTestimonial >=
        testimonials.length
    ) {

        currentTestimonial = 0;

    }

    showTestimonial();

});


prevButton.addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {

        currentTestimonial =
            testimonials.length - 1;

    }

    showTestimonial();

});


/* =========================================
   AUTO SLIDER
========================================= */

setInterval(() => {

    currentTestimonial++;

    if (
        currentTestimonial >=
        testimonials.length
    ) {

        currentTestimonial = 0;

    }

    showTestimonial();

}, 6000);


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =========================================
   ANO AUTOMÁTICO
========================================= */

const currentYear =
    new Date().getFullYear();


document
    .querySelectorAll(".footer-bottom p")
    .forEach(element => {

        element.innerHTML =
            `© ${currentYear} TRIAD Clinic. Todos os direitos reservados.`;

    });
