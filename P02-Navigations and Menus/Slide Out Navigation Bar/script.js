const nav = document.querySelector(".navbar");
const mainEle = document.getElementsByTagName("main")[0];
let toggleBtn = document.querySelector(".nav-3-menu-btn");
const ul = document.getElementById("navbarlinks");

toggleBtn.addEventListener("click", () => {
  const openedNavbar = nav.classList.toggle("show-nav");

  // if (Array.from(nav.classList).find((element) => (element = "show-nav"))) {
  if (openedNavbar) {
    if (window.matchMedia("(max-width: 500px)").matches) {
      logicForMobileDevices();
    }

    toggleBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    addNewSideBarLinks();
  } else {
    if (window.matchMedia("(max-width: 500px)").matches) {
      mainEle.classList.remove("hideMain");
      nav.classList.remove("navFullWidth");
    }

    toggleBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

function addNewSideBarLinks() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    switch (i) {
      case 0:
        li.innerHTML = `<a href="#">Articles</a>`;
        break;
      case 1:
        li.innerHTML = `<a href="#">Documentation</a>`;
        break;
      default:
        break;
    }

    ul.appendChild(li);
  }
}

function logicForMobileDevices() {
  mainEle.classList.add("hideMain");
  nav.classList.add("navFullWidth");

  const btnn = document.createElement("button");
  btnn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  btnn.classList.add("nav-3-menu-btn", "navBtn");
  nav.insertBefore(btnn, nav.firstChild);

  btnn.addEventListener("click", () => {
    nav.classList.remove("show-nav");
    mainEle.classList.remove("hideMain");

    toggleBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    const btnToremove = document.querySelector(".navBtn");
    nav.removeChild(btnToremove);
    nav.classList.remove("navFullWidth");
  });
}
