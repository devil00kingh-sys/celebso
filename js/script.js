/* ==================================================
   CELEBSO Landing Page - Scripts
   File: js/script.js
   ================================================== */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        updateCopyrightYear();
        initMobileMenu();
        initReveal();
    });

    function updateCopyrightYear() {
        var copy = document.querySelector(".copy");
        if (copy) {
            copy.textContent = "\u00A9 " + new Date().getFullYear() + " Celebso. All rights reserved.";
        }
    }

    function initMobileMenu() {
        var toggle = document.querySelector(".nav-toggle");
        var menu = document.querySelector(".mobile-menu");
        if (!toggle || !menu) return;

        toggle.addEventListener("click", function () {
            var isOpen = menu.classList.toggle("open");
            toggle.classList.toggle("active", isOpen);
        });

        var links = menu.querySelectorAll("a");
        links.forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("open");
                toggle.classList.remove("active");
            });
        });
    }

    function initReveal() {
        var els = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            els.forEach(function (el) { el.classList.add("visible"); });
            return;
        }
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(function (el) { obs.observe(el); });
    }
})();