const JobInput = document.getElementById("JobInput");
    const emailInput = document.getElementById("EmailInput");
    const passwordInputAccount = document.getElementById("PasswordInputAccount");
    const btnSignin = document.getElementById("btnAccount");

    btnSignin.addEventListener("click", checkCredentialsAccount);

    function checkCredentialsAccount() {
        if (JobInput.value === "veto" && emailInput.value === "testest@mail.com" && passwordInputAccount.value === "123") {
            alert("Vous êtes connecté en tant qu'employé");

            const token = "sssssssddddddddeeeeeeeeffffffffggggg";
            setToken(token);

            setCookie("role", "admin", 7);
       window.location.replace("/");
    }
    else{
        emailInput.classList.add("is-invalid");
        passwordInputAccount.classList.remove("is-valid");
    }
  }