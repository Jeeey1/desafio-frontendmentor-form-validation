// Declaração das variáveis necessárias para início da lógica
const form = document.getElementById("form");
const usernameForm = document.querySelector(".form-username");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const textAreaInput = document.getElementById("text-area");
const checkboxInput = document.getElementById('term');
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radioInput = document.querySelectorAll("input[type=radio]");
const imgRadio = document.querySelector(".radio-checked");


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


// Ativa mensagem de enviado dados com sucesso caso todos os inputs estejam corretos
function messageSubmit(){
  const popUpMessage = document.querySelector(".success-msg");
  popUpMessage.classList.add('success-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Loop para alterar cor dos radio-button ao clicar
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


// Verificações do Input First Name
function checkInputName() {
  const firstNameValue = firstNameInput.value;

  if (firstNameValue === "") {
    errorMsgName(firstNameInput);
  } else {
    removeErrorMsgName(firstNameInput);
  }
}


// Verificações do Input Last Name
function checkInputLastName() {
  const lastNameValue = lastNameInput.value;
  
  if (lastNameValue === "") {
    errorMsgName(lastNameInput);
  } else {
    removeErrorMsgName(lastNameInput);
  }
}


// Verificações do Input Email
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


// Verificações do Input Radio Button
function checkRadioButtons() {
  if (!radio1.checked && !radio2.checked) {
    errorMsgRadio();
  }
}


// Verificações do Input TextArea
function checkInputTextArea() {
  const textAreaValue = textAreaInput.value;
  
  if (textAreaValue === "") {
    errorMsg(textAreaInput);
  } else {
    removeErrorMsg(textAreaInput);
  }
}


// Verificações do Input Checkbox
function checkInputCheckbox(){
  const checkboxValue = checkboxInput.checked;
  if (!checkboxValue){
    errorMsg(checkboxInput);
  } else {
    removeErrorMsg(checkboxInput);
  }
}


// Adiciona imagem de checkbox check e oculta o checkbox button padrão do navegador
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


// função que contém todas as funções de check input
function checkInputGeneral() {
  checkInputName();
  checkInputLastName();
  checkInputEmail();
  checkInputTextArea();
  checkRadioButtons();
  checkInputCheckbox();
}


// Funções de erro
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