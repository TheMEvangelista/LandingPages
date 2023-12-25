const main = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const buttonLogin = document.querySelector(".login");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  main.classList.add("active");
});

loginLink.addEventListener("click", () => {
  main.classList.remove("active");
});

buttonLogin.addEventListener("click", () => {
  main.classList.add("popup");
});

iconClose.addEventListener("click", () => {
  main.classList.remove("popup");
});
