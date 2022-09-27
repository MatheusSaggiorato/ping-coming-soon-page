const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage")

emailInput.oninvalid = function (evt) {
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        errorMessage.style.display = "block"
        emailInput.style.border = "1px solid var(--secondary-lightRed"
    }
};

emailInput.onclick = function () {
    errorMessage.style.display = "none";
    emailInput.style.border = " 1px solid var(--secondary-paleBlue)";
}