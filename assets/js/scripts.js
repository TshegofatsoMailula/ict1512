function createAccount(formId)
{
    const submitButton = document.getElementById("submitButton");
    const fomr = document.getElementById(formId);
    submitButton.addEventListener("click",function(e){
    e.preventDefault();
    const preferred = document.getElementById("preferred_name").value;
    const fullNames = document.getElementById("full_names").value;
    const surname = document.getElementById("surname").value;
    const idNumber = document.getElementById("id_number").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const shipping = document.getElementById("shipping").value;
    const maskedID = "*********" + idNumber.slice(-4);
    const cardName = document.getElementById("card_name").value;
    const cardType = document.getElementById("card_type").value;
    const expiry = document.getElementById("expiry").value;
    const cvc = document.getElementById("cvc").value;
    const params = new URLSearchParams();
    params.append("preferred_name", preferred);
    params.append("full_names", fullNames);
    params.append("surname", surname);
    params.append("id_number", maskedID);
    params.append("phone", phone);
    params.append("email", email);
    params.append("shipping", shipping);
    params.append("card_name", cardName);
    params.append("card_type", cardType);
    params.append("expiry", expiry);
    params.append("cvc", "***"); 
    window.location.href = "orderConfirmation.html?" + params.toString();
    })
}
function displayClientData()
{
    const params = new URLSearchParams(window.location.search);

   document.getElementById("preferred_name").textContent =params.get("preferred_name");
    document.getElementById("full_names").textContent = params.get("full_names") ?? "";

    document.getElementById("surname").textContent = params.get("surname") ?? "";

    document.getElementById("id_number").textContent = params.get("id_number") ?? "";

    document.getElementById("phone").textContent = params.get("phone") ?? "";

    document.getElementById("email").textContent = params.get("email") ?? "";

    document.getElementById("shipping").textContent = params.get("shipping") ?? ""; 
    document.getElementById("card_name").textContent = params.get("card_name") ?? "";
    document.getElementById("card_type").textContent = params.get("card_type") ?? "";
    document.getElementById("expiry").textContent = params.get("expiry") ?? "";
    document.getElementById("cvc").textContent = params.get("cvc") ?? "";
}