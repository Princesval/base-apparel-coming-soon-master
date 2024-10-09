const button = document.getElementById("submitBtn");
let email = document.getElementById("emailInput");
const errorMsg = document.getElementById("email-result");
const hiddenImg = document.getElementById("error-img");

button.addEventListener('click', () => {
    if(email.value.indexOf("@") != -1) {
        console.log('Email válido');
        hiddenImg.style.display = 'none'
        errorMsg.textContent = " "
    } else {
        errorMsg.textContent = "Please provide a valid email";
        hiddenImg.style.display = 'block'
        email.style.border = '1px solid hsl(0, 93%, 68%)';
    }
})