const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin =document.getElementById("btnSignin");


btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
       alert("vous etes connecté");

       const token = "djfhqjfhdsfiudguduhgfjghghfhjgfgjkjg";
       setToken(token);


       window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
    }
  }