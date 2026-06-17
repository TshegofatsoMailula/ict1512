function validation(formId)
{
    const submitButton = document.getElementById("submitButton")
    const form = document.getElementById(formId);
    submitButton.addEventListener("click",function(e){
        console.log("button clicked");
        e.preventDefault();
        const inputs = form.querySelectorAll("input");
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}
