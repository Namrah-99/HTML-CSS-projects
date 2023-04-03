const nav = document.querySelector(".primary-navigation");
const togglebtn = document.querySelector(".mobile-nav-toggle");
togglebtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    togglebtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    togglebtn.setAttribute("aria-expanded", false);
  }
});
