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
  async function (event) {
    event.preventDefault();

    const formData =
      new FormData(consultationForm);

    const name =
      formData.get("name");

    try {
      const response = await fetch(
        "https://formspree.io/f/xdeowypl",
        {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        }
      );

      if (response.ok) {
        formSuccess.textContent =
          `Thank you ${name}. Your consultation request has been submitted successfully. The firm will contact you using the details provided.`;

        consultationForm.reset();
      } else {
        formSuccess.textContent =
          "There was a problem submitting your consultation request. Please try again.";
      }

    } catch (error) {
      formSuccess.textContent =
        "There was a problem submitting your consultation request. Please check your internet connection and try again.";
    }
  }
);
