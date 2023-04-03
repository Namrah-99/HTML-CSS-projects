// Popup Modal - Dailog
const modal = document.getElementById("modal");
const openBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.showModal();
});
closeBtn.addEventListener("click", () => {
  modal.close();
});
