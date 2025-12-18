const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = regName.value.trim();
    const email = regEmail.value.trim();
    const password = regPassword.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const passwordPattern = /^(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 6 characters and contain at least one number");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(user));

    alert("Account created successfully");
    window.location.href = "login.html";
  });
}
