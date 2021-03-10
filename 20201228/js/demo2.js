const btn = document.querySelector(".botton3");
btn.addEventListener("click", show);

function show() {
  console.log(btn.innerHTML);
  btn.style.background = "blue";
}
