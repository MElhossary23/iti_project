const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

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

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No account found");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful 🎉");
      window.location.href = "index.html";
    } else {
      alert("Email or Password is incorrect");
    }
  });
}
