const formEl = document.querySelector(".cta-form");
const inputEl = document.querySelector(".cta-input");
const btnBoxEl = document.querySelector(".cta-btn-box");

let inputValidation = true;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value.trim();

  if (inputValue.length && inputValue.includes("@")) return;

  // Add red border to input
  inputEl.classList.add("cta-input--error");

  // Make error text and append it at the end of form
  const errorMessageEl = document.createElement("p");
  const errorContent = document.createTextNode("Please provide a valid email");

  errorMessageEl.appendChild(errorContent);
  errorMessageEl.classList.add("cta-error-text");
  formEl.appendChild(errorMessageEl);

  // Create error icon
  const imageBox = document.createElement("div");
  imageBox.classList.add("cta-err");

  const errImage = document.createElement("img");
  errImage.setAttribute("src", "./images/icon-error.svg");
  errImage.setAttribute("alt", "Error icon");

  imageBox.appendChild(errImage);
  btnBoxEl.prepend(imageBox);

  inputValidation = false;
});

inputEl.addEventListener("input", (e) => {
  if (inputValidation) return;
  if (e.target.value.length < 2) return;
  if (!e.target.value.includes("@")) return;

  const errorMessageEl = formEl.querySelector(".cta-error-text");
  const imageBox = btnBoxEl.querySelector(".cta-err");
  imageBox.remove();
  errorMessageEl.remove();

  inputEl.classList.remove("cta-input--error");
});
