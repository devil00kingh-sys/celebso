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
        initThemeToggle();
        initReelSound();
        initViewAll();
    });

    function updateCopyrightYear() {
        var copy = document.querySelector(".copy");
        if (copy) {
            copy.textContent = "\u00A9 " + new Date().getFullYear() + " ANTELLAY Tech. All Rights Reserved. A Celebso Group Company.";
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

    function initThemeToggle() {
        var toggles = document.querySelectorAll(".theme-toggle");
        if (!toggles.length) return;

        var saved = localStorage.getItem("celebso-theme");
        if (saved !== "dark") {
            document.body.classList.add("light");
        }

        toggles.forEach(function (el) {
            var label = document.createElement("span");
            label.className = "theme-label";
            label.textContent = "Light / Dark";
            el.appendChild(label);
        });

        toggles.forEach(function (toggle) {
            toggle.addEventListener("click", function () {
                var isLight = document.body.classList.toggle("light");
                localStorage.setItem("celebso-theme", isLight ? "light" : "dark");
            });
        });
    }

    function initViewAll() {
        var btn = document.querySelector(".view");
        var modal = document.getElementById("reelsModal");
        if (!btn || !modal) return;

        btn.addEventListener("click", function () {
            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        });

        var close = modal.querySelector(".reels-modal-close");
        close.addEventListener("click", closeModal);

        modal.addEventListener("click", function (e) {
            if (e.target === modal) closeModal();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
        });

        function closeModal() {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    function initReelSound() {
        var buttons = document.querySelectorAll(".reel-mute");
        if (!buttons.length) return;

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var reel = btn.closest(".reel");
                var video = reel.querySelector("video");
                if (!video) return;
                var muted = video.muted;
                video.muted = !muted;
                btn.textContent = muted ? "🔊" : "🔇";
                btn.setAttribute("aria-label", muted ? "Mute" : "Unmute");
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