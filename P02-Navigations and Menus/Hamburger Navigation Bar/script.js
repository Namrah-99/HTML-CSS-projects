const toggleBtn = document.querySelector(".nav-toggle");
const navbarLinks = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("show-links");
});
