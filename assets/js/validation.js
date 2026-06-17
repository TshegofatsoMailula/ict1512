import { createAccount } from "./scripts.js";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("client_registration");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.setCustomValidity("");
        });

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.setCustomValidity("This field is required");
                isValid = false;
            }
        });

        const idInput = document.getElementById("id_number");
        if (idInput && idInput.value.length !== 13) {
            idInput.setCustomValidity("ID number must be 13 digits");
            isValid = false;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (isValid) {
            createAccount();
        }
    });
});