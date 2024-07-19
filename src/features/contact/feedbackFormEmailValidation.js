const form = document.querySelector(".contact-form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

function ShowEmailErrorMsg() {
  emailError.textContent.className = "error-msg";
  emailError.textContent = "Please enter a valid email address.";
}

function checkEmailInputValidity() {
  // check if the form is valid
  if (email.validity.valid) {
    // if there's a visible error msg, remove + reset it
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
}

function checkEmailValidityOnSubmit(e) {
  if (!email.validity.valid) {
    showError();
    // prevent the form from being sent by canceling the event
    e.preventDefault();
  }
}

function showError() {
  if (email.validity.ValueMissing) {
    ShowEmailErrorMsg();
  } else if (email.validity.typeMismatch) {
    ShowEmailErrorMsg();
  }

  // Set styling. Assign 2 class names.
  emailError.className = "error active";
}

email.addEventListener("input", checkEmailInputValidity);
form.addEventListener("submit", checkEmailValidityOnSubmit);
