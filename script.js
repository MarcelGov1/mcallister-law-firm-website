/* =====================================
   MCALLISTER G LAW FIRM
   JAVASCRIPT
===================================== */


/* ===============================
   MOBILE NAVIGATION
================================ */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", function () {

    const isOpen =
        navLinks.classList.toggle("open");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuToggle.textContent =
        isOpen ? "✕" : "☰";

});



/* ===============================
   CLOSE MOBILE MENU
================================ */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });



/* ===============================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ===============================
   CONSULTATION FORM
================================ */

const consultationForm =
    document.getElementById("consultForm");


const formSuccess =
    document.getElementById("formSuccess");


consultationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formData =
            new FormData(consultationForm);


        const name =
            formData.get("name");


        /*
         * This is currently a front-end
         * demonstration.
         *
         * The form can later be connected
         * to a Cloudflare Worker,
         * Formspree, Web3Forms or another
         * secure backend.
         */


        formSuccess.textContent =
            `Thank you ${name}. Your consultation request has been prepared successfully. The firm will contact you using the details provided.`;


        consultationForm.reset();

    }
);
