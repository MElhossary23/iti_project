const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
    };

    localStorage.setItem("userData", JSON.stringify(user));

    alert("Account created successfully");
    window.location.href = "login.html";
  });
}
