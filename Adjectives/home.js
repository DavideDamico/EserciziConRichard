const addUsernameBtn = document.getElementById("addUsernameBtn");
const clearUsernameBtn = document.getElementById("clearUsernameBtn");
const inputUsername = document.getElementById("inputUsername");
const addAdjectivesBtn = document.getElementById("addBtn");
const clearAdjectivesBtn = document.getElementById("clearBtn");
const input = document.getElementById("input");
const containerUsername = document.getElementById("container-username");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeBack = document.getElementById("welcome");
const adjectivesUser = document.getElementById("adjectives");

function onLoginWelcomeback() {
  const username = localStorage.getItem("username");
  welcomeBack.textContent = `Welcome back ${username}`;
}

function onClickAddUsernameBtn() {
  const inputUsernameValue = inputUsername.value;
  if (inputUsernameValue === "") {
    alert("Please insert username");
  } else {
    localStorage.setItem("username", inputUsernameValue);
    const usernameCreated = document.createElement("p");
    usernameCreated.textContent = inputUsernameValue;
    containerUsername.appendChild(usernameCreated);
  }
}

function onClickClearUsernameBtn() {}

function onClickClearAdjectivesBtn() {
  adjectivesUser.textContent = "";
  localStorage.removeItem("adjectives");
}

function onClickAddAdjectivesBtn() {
  const adjectives = input.value;
  const inputUsernameValue = inputUsername.value;
  if (adjectives === "") {
    alert("Please insert adjectives");
  } else {
    localStorage.setItem("adjectives", adjectives);
    adjectivesUser.textContent = `${inputUsernameValue} is ${adjectives}`;
  }
}

function onClickLogoutBtn() {
  localStorage.removeItem("adjectives");
  localStorage.removeItem("username");
  window.location.href = "./index.html";
}

onLoginWelcomeback();
addUsernameBtn.addEventListener("click", onClickAddUsernameBtn);
clearUsernameBtn.addEventListener("click", onClickClearUsernameBtn);
clearAdjectivesBtn.addEventListener("click", onClickClearAdjectivesBtn);
addAdjectivesBtn.addEventListener("click", onClickAddAdjectivesBtn);
logoutBtn.addEventListener("click", onClickLogoutBtn);
