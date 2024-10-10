let loginForm = document.querySelector("#loginForm");

let userData = {};
// Load products from localStorage if available
if (localStorage.getItem("user")) {
  userData = JSON.parse(localStorage.getItem("user"));
}
window.onload = () => {
  if (userData.isloggin == true) {
    location.href = "main.html";
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let pass = document.getElementById("password");

  if (username.value == "" || pass.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    const userdata = {
      Email: username.value,
      Password: pass.value,
      isloggin: true,
    };
    localStorage.setItem("user", JSON.stringify(userdata));
    location.href = "main.html";
  }
});
