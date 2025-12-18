const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No account found");
      return;
    }

    if (
      loginEmail.value === storedUser.email &&
      loginPassword.value === storedUser.password
    ) {
      alert("Login successful 🎉");
      window.location.href = "index.html";
    } else {
      alert("Email or Password is incorrect");
    }
  });
}
