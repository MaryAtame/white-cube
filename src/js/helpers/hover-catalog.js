document.addEventListener("DOMContentLoaded", () => {

const catalogBtn = document.querySelectorAll('[data-hover-catalog]');
const catalogContent = document.querySelectorAll('[data-catalog-content]');

        catalogBtn.addEventListener("mousedown", function(event) {

            if (event.which == 1) {
                catalogContent.classList.remove("active");
            } else {
                catalogContent.classList.add("active");
            }
        });
    });