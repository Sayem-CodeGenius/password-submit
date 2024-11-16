let passwordBtn = document.querySelector(".passBtn");
let passwordInput = document.querySelector(".passFiled input");
function passwordShow(){
    if(passwordInput.type == "password"){
        passwordInput.type = 'text'
        passwordBtn.innerHTML = '<i class="bi bi-eye"></i>'
    } else {
        passwordInput.type = 'password'
        passwordBtn.innerHTML = '<i class="bi bi-eye-slash"></i'
    }

}

passwordBtn.addEventListener("click" , passwordShow)

let submitBtn = document.querySelector(".submitBtn");

function submitFrom(){
    passwordInput.value.length > 6
    ? alert("Form Submitted")
    : (passwordInput.value.length == 0 ? alert("Password is required") : alert("Password must be at least 8 characters long"));

}

submitBtn.addEventListener('click', submitFrom )