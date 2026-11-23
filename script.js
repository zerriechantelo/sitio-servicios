
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        const abierto = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", abierto);

    });

    const enlaces = navMenu.querySelectorAll("a");

    enlaces.forEach(function(enlace) {

        enlace.addEventListener("click", function() {

            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", false);

        });

    });

}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
