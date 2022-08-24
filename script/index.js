// Selects Needed Form Elements in DOM
var input = document.querySelector("input");
var form = document.querySelector("form");
var errorMessage = document.querySelector(".error-message");

// Runs validateEmail() when form is submitted
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var inputValue = input.value; // Saves input value

    if (validateEmail(inputValue)) {
        errorMessage.style.display = "none"; // Hides error <p> element
        input.classList.remove("error"); // Makes input border blue
    }
    else {
        errorMessage.style.display = "block"; // Shows error <p> element
        input.classList.add("error"); // Makes input border red
    }
});
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
