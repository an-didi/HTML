const btn = document.querySelector("header button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.addEventListener("click", setModal, false);
close.addEventListener("click", setModal, false);

function setModal(ev) {
  ev.preventDefault();
  let status = window.getComputedStyle(modal, null).getPropertyValue("display");
  modal.style.display = status === "none" ? "block" : "none";
}
