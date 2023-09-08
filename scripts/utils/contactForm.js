// modal selector
const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "flex";
}

// close modal button selector and listener
const closeModalBtn = document.querySelector("#close-button");
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

// sending form button
const contactBtn = document.querySelector(".contact_button");

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
    userSurnameError.style.display = "none";
    userEmailError.style.display = "none";
    userMessageError.style.display = "none";
  }
  // display error message if the surnamename input is empty
  else if (userSurname.length < 2 || userSurname === " ") {
    userNameError.style.display = "none";
    userSurnameError.style.display = "block";
    userEmailError.style.display = "none";
    userMessageError.style.display = "none";
  }
  // display error message if the email input is empty
  else if (!userEmail.match(regexEmail)) {
    userNameError.style.display = "none";
    userSurnameError.style.display = "none";
    userEmailError.style.display = "block";
    userMessageError.style.display = "none";
  }
  // display error message if the message input value is empty
  else if (userMessage.length < 2 || userMessage === " ") {
    userNameError.style.display = "none";
    userSurnameError.style.display = "none";
    userEmailError.style.display = "none";
    userMessageError.style.display = "block";
  }
  // If all inputs are valid then the datas are logged
  else {
    const userDatas = {
      Prénom : userName, 
      Nom : userSurname, 
      Email : userEmail, 
      Message : userMessage
    }
    console.log(userDatas);

    const form = document.querySelector("form")
    form.reset()
    modal.style.display = "none";
  }
});
