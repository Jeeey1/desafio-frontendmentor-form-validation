const radioInput = document.querySelectorAll("input[type=radio]");
const imgRadio = document.querySelector(".radio-checked");

radioInput.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    radioInput.forEach((item) => {
      if (item.value === event.target.value) {
        const parentRadio = item.parentElement;
        item.classList.add("active");
        item.classList.add("hidden-radio");
        parentRadio.style.backgroundColor = "rgba(12, 125, 105, 0.3)";
        parentRadio.style.borderColor = "rgba(12, 125, 105, 1)";
      } else {
        const parentRadio = item.parentElement;
        item.classList.remove("active");
        item.classList.remove("hidden-radio");
        parentRadio.style.backgroundColor = "#fff";
        parentRadio.style.borderColor = " rgba(43, 66, 70, 0.5)";
      }
    });
  });
});

// ----------------------------------------------------------------------

const form = document.getElementById("form");
const usernameForm = document.querySelector(".form-username");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const textAreaInput = document.getElementById("text-area");
const checkboxInput = document.getElementById('term');

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

// Evento submit do botão principal para executar o método geral
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

// Método geral contendo todos os outros métodos de input
function checkForm(){
  checkInputGeneral();

  const formItems = form.querySelectorAll('div[class^="form"]');
  console.log(formItems);

  const isValid = [...formItems].every((item) => {
    return !item.classList.contains('erro');
  })
  console.log(isValid)

  if(isValid){
    messageSubmit();
  }
}

function messageSubmit(){
  const popUpMessage = document.querySelector(".success-msg");
  popUpMessage.classList.add('success-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function checkInputGeneral() {
  checkInputName();
  checkInputLastName();
  checkInputEmail();
  checkInputTextArea();
  checkRadioButtons();
  checkInputCheckbox();
}


// Bolinha verde do radio input
checkedInputClick();


// Verificações de inputs

function checkInputName() {
  const firstNameValue = firstNameInput.value;

  if (firstNameValue === "") {
    errorMsgName(firstNameInput);
  } else {
    removeErrorMsgName(firstNameInput);
  }
}

function checkInputLastName() {
  const lastNameValue = lastNameInput.value;

  if (lastNameValue === "") {
    errorMsgName(lastNameInput);
  } else {
    removeErrorMsgName(lastNameInput);
  }
}

function checkInputEmail() {
  const emailValue = emailInput.value;

  if (emailValue === '' || !isEmailValid(emailValue)){
    errorMsg(emailInput);
  } else {
    removeErrorMsg(emailInput);
  }
}

// Valida o email digitado
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if(emailRegex.test(email)){
    return true;
  }
  return false;
}

function checkRadioButtons() {
  if (!radio1.checked && !radio2.checked) {
    errorMsgRadio();
  }
}
function checkedInputClick() {
  radioInput.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (item.value === event.target.value) {
        const parentInput = item.parentElement.parentElement;
        parentInput.classList.remove("erro");
      }
    });
  });
}

function checkInputTextArea() {
  const textAreaValue = textAreaInput.value;

  if (textAreaValue === "") {
    errorMsg(textAreaInput);
  } else {
    removeErrorMsg(textAreaInput);
  }
}

function checkInputCheckbox(){
  const checkboxValue = checkboxInput.checked;
  if (!checkboxValue){
    errorMsg(checkboxInput);
  } else {
    removeErrorMsg(checkboxInput);
  }
}

checkboxInput.addEventListener('click', (event => {
  const parentElement = checkboxInput.parentElement;
  if(event.target.checked){
    parentElement.classList.add('visible-check');
    checkboxInput.style.visibility = 'hidden'
  } else {
    parentElement.classList.remove('visible-check');
    checkboxInput.style.visibility = 'visible'
  }
}))
// Métodos de erro

function errorMsg(input) {
  const parentInput = input.parentElement;
  parentInput.classList.add("erro");
}

function removeErrorMsg(input){
  const parentInput = input.parentElement;
  parentInput.classList.remove("erro");
}

function errorMsgName(input) {
  const parentInput = input.parentElement.parentElement;
  parentInput.classList.add("erro");
}

function removeErrorMsgName(input){
  const parentInput = input.parentElement.parentElement;
  parentInput.classList.remove("erro");
}


function errorMsgRadio() {
  const parentRadio = document.querySelector(".form-query");
  parentRadio.classList.add("erro");
}
