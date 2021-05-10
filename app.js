let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
