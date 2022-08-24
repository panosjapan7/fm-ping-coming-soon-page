// Selects Needed Form Elements in DOM
var input = document.querySelector("input");
var form = document.querySelector("form");
var errorMessage = document.querySelector(".error-message");
// Runs validateInputs when form is submitted
if (form != null) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var inputValue = input.value; // Saves input value
        if (validateEmail(inputValue)) {
            console.log("valid email");
            if (errorMessage != null) {
                errorMessage.style.display = "none";
            }
            input.classList.remove("error");
        }
        else {
            console.log("invalid email");
            if (errorMessage != null) {
                errorMessage.style.display = "block";
            }
            input.classList.add("error");
        }
    });
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// export {}; // 👈️ make file ES Module
