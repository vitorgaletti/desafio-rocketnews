const inputEmail = document.getElementById('input-email');
const button = document.getElementById('button');

function start() {
  inputEmail.focus();
  sendEmail();
}

function showAlert(message) {
  alert(message);
}

function isEmptyInput() {
  if (inputEmail.value === '') {
    showAlert('E-mail vazio!');
    inputEmail.focus();
  } else {
    showAlert('E-mail enviado com sucesso!!!');
    inputEmail.textContent = '';
  }
}

function sendEmail() {
  button.addEventListener('click', () => {
    isEmptyInput();
  });
}

start();
