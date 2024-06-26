const loginBtn = document.getElementById("loginBtn");
const input = document.getElementById("input");

function onClickLoginBtn() {
  const username = input.value;
  console.log(username);
  if (username === "") {
    alert("Please insert username");
  } else {
    localStorage.setItem("username", username);
    window.location.href = "./home.html";
  }
}

loginBtn.addEventListener("click", onClickLoginBtn);
