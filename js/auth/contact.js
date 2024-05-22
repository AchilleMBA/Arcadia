// Récupération des éléments du DOM
const titreInput = document.getElementById("TitreInput");
const descriptionInput = document.getElementById("DescriptionInput");
const emailInput = document.getElementById("EmailInput");
const btnContact = document.getElementById("btnContact");

// Ajout des écouteurs d'événements
titreInput.addEventListener("keyup", validateFormContact); 
descriptionInput.addEventListener("keyup", validateFormContact);
emailInput.addEventListener("keyup", validateFormContact);

function validateFormContact() {
    const titreOk = validateRequired(titreInput);
    const descriptionOk = validateRequired(descriptionInput);
    const emailOk = validateMail(emailInput);

    btnContact.disabled = !(titreOk && descriptionOk && emailOk);
}

function checkCredentialsAccount() {
    if (titreInput.value === "veto" && emailInput.value === "testest@mail.com" && passwordInputAccount.value === "123") {
        alert("Vous êtes connecté en tant qu'employé");

        const token = "sssssssddddddddeeeeeeeeffffffffggggg";
        setToken(token);

        setCookie("role", 7);
   window.location.replace("/");
}
else{
    emailInput.classList.add("is-invalid");
    passwordInputAccount.classList.remove("is-valid");
}
}

function validateMail(input) {
    // Définir le regex pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if (emailRegex.test(mailUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
