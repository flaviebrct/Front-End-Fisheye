const photographerPage = document.querySelector("#photographer-page");

// modal selector
const backgroundModal = document.querySelector(".background-modal");
const modal = document.querySelector("#contact_modal");

function displayModal() {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  photographerPage.setAttribute("aria-hidden", "true");
}

// close modal button selector and listener
const closeModalBtn = document.querySelector("#close-button");
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  photographerPage.setAttribute("aria-hidden", "false");
}

// close modal when clicking outside it
backgroundModal.addEventListener("click", closeModal);

modal.addEventListener("keydown", handleFocus);

// handle focus inside modal
function handleFocus(event) {
  if (event.key === "Tab") {
    console.log("Tab");
    const focusableElements = modal.querySelectorAll(".form-input");
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      // Shift + Tab from the first element
      event.preventDefault();
      lastFocusable.focus();
    } else if (!event.shiftKey && document.activeElement === lastFocusable) {
      // Tab from the last element
      event.preventDefault();
      firstFocusable.focus();
    }
  }
}

// sending form button
const contactBtn = document.querySelector(".contact_button");
contactBtn.focus();

// form verification and log datas
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // form inputs selector
  const userName = document.querySelector("#name").value;
  const userSurname = document.querySelector("#surname").value;
  const userEmail = document.querySelector("#email").value;
  const userMessage = document.querySelector("#message").value;

  // error message selector
  const userNameError = document.querySelector(".name-error");
  const userSurnameError = document.querySelector(".surname-error");
  const userEmailError = document.querySelector(".email-error");
  const userMessageError = document.querySelector(".message-error");

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // display error message if the name input is empty
  if (userName.length < 2 || userName === " ") {
    userNameError.style.display = "block";
  }
  // display error message if the surnamename input is empty
  else if (userSurname.length < 2 || userSurname === " ") {
    userSurnameError.style.display = "block";
  }
  // display error message if the email input is empty
  else if (!userEmail.match(regexEmail)) {
    userEmailError.style.display = "block";
  }
  // display error message if the message input value is empty
  else if (userMessage.length < 2 || userMessage === " ") {
    userMessageError.style.display = "block";
  }
  // If all inputs are valid then the datas are logged
  else {
    const userDatas = {
      Prénom: userName,
      Nom: userSurname,
      Email: userEmail,
      Message: userMessage,
    };
    console.log(userDatas);

    const form = document.querySelector("form");
    form.reset();
    modal.style.display = "none";
  }
});
