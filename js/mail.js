// dichiarazione variabili
const body = document.querySelector("body")
const inputEmail = document.getElementById("InputEmail");
const btnLogin = document.getElementById("btn-login");
// array email consentite
const allowedEmail = ["boolean@gmail.com", "class102@gmail.com", "loremipsum@gmail.com", "user@gmail.com"]

// Evento al click del button Login
btnLogin.addEventListener("click", function () {
    const email = inputEmail.value;

    for (let i = 0; i < allowedEmail.length; i++) {

        if (email === allowedEmail[i]) {
            console.log("La mail inserita è corretta!");
            body.style.backgroundColor = "#198754";
            alert("La mail inserita è corretta!")
            i = allowedEmail.length - 1;
        }
        else if (i === allowedEmail.length - 1) {
            console.log("la mail inserita è sbagliata");
            body.style.backgroundColor = "#dc3545";
            alert("la mail inserita è sbagliata")
        }

    }
})