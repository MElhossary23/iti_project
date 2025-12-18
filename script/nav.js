const burger = document.querySelector(".burger");
if (burger) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.textContent = menu.classList.contains("active") ? "✖" : "☰";
  });
}
