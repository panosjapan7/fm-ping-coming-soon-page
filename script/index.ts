
// Selects Needed Form Elements in DOM
let input = (<HTMLInputElement>document.querySelector("input"));
let form = document.querySelector("form") as HTMLElement;
let errorMessage = document.querySelector(".error-message");

// HTMLFormElement

// Runs validateInputs when form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = input.value; // Saves input value
    
    if(validateEmail(inputValue)) {
        console.log("valid email");
        errorMessage.style.display = "none";
        input.classList.remove("error");
    }
    else {
        console.log("invalid email");
        errorMessage.style.display = "block";
        input.classList.add("error");
    }

})

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
