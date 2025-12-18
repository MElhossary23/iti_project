function includeHTML(id, file) {
  fetch(file)
  .then(response => response.text())
  .then(data => {
    document.getElementById(id).innerHTML = data;
    
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav");
    if (burger && menu) {
      burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.textContent = menu.classList.contains("active") ? "✖" : "☰";
      });
    }
  })
  .catch(error => console.log(error));
}

includeHTML("nav-placeholder", "nav.html");
includeHTML("footer-placeholder", "footer.html");


