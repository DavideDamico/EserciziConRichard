// const node = document.getElementById("button");

// function onClick() {
//   const buttonClicked = localStorage.getItem("buttonClicked");
//   if (!!buttonClicked) {
//     console.log("Already clicked");
//     localStorage.removeItem("buttonClicked");
//   } else {
//     console.log("Welcome!");
//     localStorage.setItem("buttonClicked", "true");
//   }
// }

// node.addEventListener("click", onClick);

// ESERCIZIO SVOLTO CON RICCARDO , FUNZIONE CHE PERMETTE DI SALVARE UN DATO NEL LOCAL STORAGE E SE QUEL DATO è PRESENTE FARE QUALCOSA
function onDocumentLoaded() {
  const isLogged = localStorage.getItem("isLogged");
  if (isLogged === "true") {
    const nodeWelcome = document.createElement("h1");
    nodeWelcome.textContent = "Welcome!";
    const nodeRoot = document.getElementById("root");
    nodeRoot.appendChild(nodeWelcome);
  } else {
    const nodeButtonLogin = document.createElement("button");
    nodeButtonLogin.textContent = "Login";
    const nodeRoot = document.getElementById("root");
    nodeRoot.appendChild(nodeButtonLogin);

    function onButtonLoginClick() {
      localStorage.setItem("isLogged", "true");
      window.location.reload();
    }

    nodeButtonLogin.addEventListener("click", onButtonLoginClick);
  }
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
