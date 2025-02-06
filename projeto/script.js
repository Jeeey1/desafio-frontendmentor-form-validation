const radioInput = document.querySelectorAll("input[type=radio]");
const imgRadio = document.querySelector(".radio-checked");

radioInput.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    radioInput.forEach((item) => {
      if (item.value === event.target.value) {
        const parentRadio = item.parentElement;
        item.classList.add('active');
        item.classList.add('hidden-radio');
        parentRadio.style.backgroundColor = "rgba(12, 125, 105, 0.3)";
        parentRadio.style.borderColor = "rgba(12, 125, 105, 1)";
      } else {
        const parentRadio = item.parentElement;
        item.classList.remove('active')
        item.classList.remove('hidden-radio')
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


// Evento submit do botão principal para executar o método geral
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputGeneral();
});

// Método geral contendo todos os outros métodos de input
function checkInputGeneral() {
  checkInputName();
  checkInputLastName();
  checkInputEmail();
  checkInputTextArea();
  checkRadioButtons();
}

// Verificações de inputs

function checkInputName() {
  const firstNameValue = firstNameInput.value;
  
  if (firstNameValue === "") {
    errorMsg(firstNameInput);
  } else {
    const parentInput = firstNameInput.parentElement;
    parentInput.classList.remove("erro");
  }
}

function checkInputLastName() {
  const lastNameValue = lastNameInput.value;
  
  if (lastNameValue === "") {
    errorMsg(lastNameInput);
  } else {
    const parentInput = lastNameInput.parentElement;
    parentInput.classList.remove("erro");
  }
}


function checkInputEmail() {
  const emailValue = emailInput.value;
  
  if (emailValue === "") {
    errorMsg(emailInput);
  } else {
    const parentInput = emailInput.parentElement;
    parentInput.classList.remove("erro");
  }
}


function checkRadioButtons() {
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  
  if (!radio1.checked && !radio2.checked) {
    msgErroRadio();
  } else {
    const parentRadio = document.querySelector('.form-query')
    parentRadio.classList.remove('erro');
  }
}

function checkInputTextArea() {
  const textAreaValue = textAreaInput.value;
  
  if (textAreaValue === "") {
    errorMsg(textAreaInput);
  } else {
    const parentInput = textAreaInput.parentElement;
    parentInput.classList.remove("erro");
  }
}



// Métodos de erro

function errorMsg(input) {
  const parentInput = input.parentElement;
  parentInput.classList.add("erro");
}

function msgErroRadio() {
  const parentRadio = document.querySelector(".form-query");
  parentRadio.classList.add('erro')
}
