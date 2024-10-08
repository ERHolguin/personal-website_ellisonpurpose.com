// select necessary elements
const form = document.querySelector(".contact-form");
const userName = document.getElementById("name");
const nameError = document.querySelector("#name + span.msg-error");

// define the error message to be displayed
function showNameErrorMsg() {
  nameError.textContent = "Please enter a valid name.";
}

// validate name input
// check for existing, built-in error messages
function checkNameInputValidity() {
  // check whether the form is valid
  if (userName.validity.valid) {
    // remove error msg
    nameError.textContent = "";
    nameError.className = "error";
  } else {
    // show the error
    showError();
  }
}

// chack name validity on submit
function checkNameValidityOnSubmit(e) {
  if (!userName.validity.valid) {
    // show the error
    showError();
    // cancel the event; prevent the form from being submitted
    e.preventDefault();
  }
}

// define when to show the error + msg
function showError() {
  // when the input is empty
  if (userName.validity.valueMissing) {
    showNameErrorMsg();
  }

  // set styling of error & msg
  nameError.className = "error active";
}

userName.addEventListener("input", checkNameInputValidity);
form.addEventListener("submit", checkNameValidityOnSubmit);

// validate name input on submit
// name field can't be empty
// update CSS styles

// display error messages
