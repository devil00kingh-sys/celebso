/* ==================================================
   CELEBSO Landing Page - Scripts
   File: js/script.js
   ================================================== */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        updateCopyrightYear();
    });

    function updateCopyrightYear() {
        var copy = document.querySelector(".copy");
        if (copy) {
            copy.textContent = "\u00A9 " + new Date().getFullYear() + " Celebso. All rights reserved.";
        }
    }
})();
