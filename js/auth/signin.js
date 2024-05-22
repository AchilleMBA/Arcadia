const JobInput = document.getElementById("JobInput");
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin =document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    if(JobInput.value === "visiteur" && mailInput.value == "test@mail.com" && passwordInput.value == "123"){
       alert("vous etes connecté en tant que visiteur");

       const token = "djfhqjfhdsfiudguduhgfjghghfhjgfgjkjg";
       setToken(token);


        setCookie("role","admin",7);
       window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
    }
  }