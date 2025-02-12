// Declaração das variáveis necessárias para início da lógica
const form = document.getElementById("form");
const usernameForm = document.querySelector(".form-username");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const textAreaInput = document.getElementById("text-area");
const checkboxInput = document.getElementById("term");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radioInput = document.querySelectorAll("input[type=radio]");
const imgRadio = document.querySelector(".radio-checked");

// Selecionando todos input, transformando array e tratando os dados
const allInput = document.querySelectorAll("input");
const arrayInput = Array.from(allInput);
const novaArrayInput = arrayInput.filter(
  (_, index) => index !== 3 && index !== 4
);
novaArrayInput.push(textAreaInput); // adiciona textarea na array

// Evento submit do botão principal para executar o método geral
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});
removeErroRadioDinamico();
removeErroDinamico();

// Método geral contendo todos os outros métodos de input
function checkForm() {
  checkInputGeneral();

  const formItems = form.querySelectorAll('div[class^="form"]');

  // Verifica se os campos input estão sem erro
  const isValid = [...formItems].every((item) => {
    return !item.classList.contains("erro");
  });

  // ativa a mensagem de success submit
  if (isValid) {
    messageSubmit();
  }
}

function removeErroDinamico() {
  novaArrayInput.forEach((input) => {
    input.addEventListener("input", (event) => {
      const parentInput = input.parentElement;
      parentInput.classList.remove("erro");
    });
  });
}

function removeErroRadioDinamico() {
  radioInput.forEach((radio) => {
    radio.addEventListener("click", (event) => {
      if (radio1.checked || radio2.checked) {
        const msgPara = document.querySelector(".radio-msg-erro");
        const parentRadio = radioInput[0].parentElement.parentElement;
        parentRadio.classList.remove("erro");
        msgPara.innerText = "";
      }
    });
  });
}

// Ativa mensagem de enviado dados com sucesso caso todos os inputs estejam corretos
function messageSubmit() {
  const popUpMessage = document.querySelector(".success-msg");
  popUpMessage.classList.add("success-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    errorMsg(firstNameInput, "This field is required");
  }
}

// Verificações do Input Last Name
function checkInputLastName() {
  const lastNameValue = lastNameInput.value;
  if (lastNameValue === "") {
    errorMsg(lastNameInput, "This field is required");
  }
}

// Verificações do Input Email
function checkInputEmail() {
  const emailValue = emailInput.value;
  if (emailValue === "" || !isEmailValid(emailValue)) {
    errorMsg(emailInput, "Please enter a valid email address");
  }
}
// Valida o email digitado
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

// Verificações do Input Radio Button
function checkRadioButtons(input, msgErro) {
  const msgPara = document.querySelector(".radio-msg-erro");
  const parentRadio = input[0].parentElement.parentElement;
  // Se um dos radio button for selecionado retorna true
  if (!radio1.checked && !radio2.checked) {
    parentRadio.classList.add("erro");
    msgPara.innerText = msgErro;
  }
}

// Verificações do Input TextArea
function checkInputTextArea() {
  const textAreaValue = textAreaInput.value;
  if (textAreaValue === "") {
    errorMsg(textAreaInput, "This field is required");
  }
}

// Verificações do Input Checkbox
function checkInputCheckbox(input, msgErro) {
  const checkboxValue = input.checked;
  const checkboxParent = input.parentElement;
  const msgPara = document.querySelector(".para-term");
  if (!checkboxValue) {
    checkboxParent.classList.add("erro");
    msgPara.innerText = msgErro;
  }
}

checkboxInput.addEventListener("click", (check) => {
  const checkboxValue = checkboxInput.checked;
  const checkboxParent = checkboxInput.parentElement;
  const msgPara = document.querySelector(".para-term");
  if (checkboxValue) {
    checkboxParent.classList.remove("erro");
    msgPara.innerText = "";
  }
});

// Adiciona imagem de checkbox check e oculta o checkbox button padrão do navegador
checkboxInput.addEventListener("click", (event) => {
  const parentElement = checkboxInput.parentElement;
  if (event.target.checked) {
    parentElement.classList.add("visible-check");
    checkboxInput.style.visibility = "hidden";
  } else {
    parentElement.classList.remove("visible-check");
    checkboxInput.style.visibility = "visible";
  }
});

// função que contém todas as funções de check input
function checkInputGeneral() {
  checkInputName();
  checkInputLastName();
  checkInputEmail();
  checkInputTextArea();
  checkRadioButtons(radioInput, "Please select a query type");
  checkInputCheckbox(
    checkboxInput,
    "To submit this form, please consent to being contacted"
  );
}

// Função adiciona classe erro caso input esteja incorreto
function errorMsg(input, msgErro) {
  const parentInput = input.parentElement;
  const errorTexto = parentInput.querySelector("p");
  if (errorTexto) {
    errorTexto.innerText = msgErro;
    parentInput.classList.add("erro");
  }
}
