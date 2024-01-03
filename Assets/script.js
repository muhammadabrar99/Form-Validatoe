const formEl = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainerEl = document.querySelector(".message-container");
const messageEl = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using Constaint API
  isValid = formEl.checkValidity();
  // style Main Message for an error
  if (!isValid) {
    messageEl.textContent = "Please fill out all fields";
    messageEl.style.color = "red";
    messageContainerEl.style.borderColor = "red";
    return;
  }
  //   Check if Passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordMatch = false;
    messageEl.textContent = "Make sure passwords match.";
    messageEl.style.color = "red";
    messageContainerEl.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  //   If form is valid and passwords match
  if (isValid && passwordMatch) {
    messageEl.textContent = "Successfully Registered";
    messageEl.style.color = "green";
    messageContainerEl.style.borderColor = "green";
  }
}

function storeFormData() {
  const users = {
    name: formEl.name.value,
    phone: formEl.phone.value,
    email: formEl.mail.value,
    website: formEl.website.value,
    password: formEl.password.value,
  };
  //   This is for Checking
  console.log(users);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  //   Submit Data if Valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Event Listner
formEl.addEventListener("submit", processFormData);
