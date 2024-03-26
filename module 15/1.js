let dialog = document.createElement("dialog");
const openDialog = () => {
  dialog.showModal();
};
const closeDialog = () => {
  dialog.close();
};

const validForm = (event) => {
  event.preventDefault();
  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  const errorMessage = `<p>The form was filled out incorrectly</p>`;

  const successMesage = `<p>Success!</p>`;
  // чисто символическая проверка чтобы посмотреть что все работает/////
  if (Fname === "" || Lname === "" || email === "" || pass.length < 3) {
    renderDialog(errorMessage);
  } else renderDialog(successMesage);
};

const renderDialog = (msg) => {
  const $container = document.getElementById("valid");
  dialog.innerHTML = `<p>${msg}</p><button class='close'>Close</button>`;
  $container.appendChild(dialog);
  openDialog();
  document.querySelector(".close").addEventListener("click", closeDialog);
};

document.getElementById("check").addEventListener("click", validForm);

setTimeout(closeDialog, 5000);
