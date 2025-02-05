const radioInput = document.querySelectorAll("input[type=radio]");
const imgRadio = document.querySelector(".radio-checked");

radioInput.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const parentRadio = radio.parentElement;
    parentRadio.style.backgroundColor = "rgba(12, 125, 105, 0.3)";
    parentRadio.style.borderColor = "rgba(12, 125, 105, 1)";
  });

  radio.addEventListener("blur", (event) => {
    const parentRadio = radio.parentElement;
    parentRadio.style.backgroundColor = "#fff";
    parentRadio.style.borderColor = " rgba(43, 66, 70, 0.5)";
  });
});

const checkboxInput = document.getElementById("term");
checkboxInput.addEventListener("click", (event) => {
  checkboxInput.style.backgroundImage =
    "../assets/images/icon-checkbox-check.svg";
});

// ----------------------------------------------------------------------

const form = document.getElementById('form');
const usernameForm = document.querySelector(".form-username");
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const textAreaInput = document.getElementById('text-area');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputGeneral();
})

function checkInputName(){
  const firstNameValue = firstNameInput.value;

  if (firstNameValue === ''){
    errorMsg(firstNameInput);
  } else {
    const parentInput = firstNameInput.parentElement;
    parentInput.classList.remove('erro');
  }
}

function checkInputLastName(){
  const lastNameValue = lastNameInput.value;

  if (lastNameValue === ''){
    errorMsg(lastNameInput);
  } else {
    const parentInput = lastNameInput.parentElement;
    parentInput.classList.remove('erro');
  }
}

function checkInputEmail(){
  const emailValue = emailInput.value;

  if (emailValue === ''){
    errorMsg(emailInput);
  } else {
    const parentInput = emailInput.parentElement;
    parentInput.classList.remove('erro');
  }
}

function checkInputTextArea(){
  const textAreaValue = textAreaInput.value;

  if (textAreaValue === ''){
    errorMsg(textAreaInput);
  } else {
    const parentInput = textAreaInput.parentElement;
    parentInput.classList.remove('erro');
  }
}

function checkInputGeneral(){
  checkInputName();
  checkInputLastName();
  checkInputEmail();
  checkInputTextArea();
}


function errorMsg(input){
  const parentInput = input.parentElement;
  parentInput.classList.add('erro');
}





