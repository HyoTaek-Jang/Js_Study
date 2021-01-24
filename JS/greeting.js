let USER = localStorage.getItem("USER");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");

function greeting(USERNAME) {
  input.classList.remove("SHOW");
  input.classList.add("DESHOW");
  form.innerHTML = `Hello ${USERNAME}`;
}

function saveUser(event) {
  event.preventDefault();
  const USERNAME = getUser();

  localStorage.setItem("USER", USERNAME);
  getStUser();
  greeting(USER);
}

function getStUser() {
  console.log("asdf");
  USER = localStorage.getItem("USER");
}

function getUser() {
  return input.value;
}

function checkUser() {
  if (USER === null) {
    form.addEventListener("submit", saveUser);
  } else {
    greeting(USER);
  }
}

function init() {
  console.log("enter greeting");
  checkUser();
}

init();
