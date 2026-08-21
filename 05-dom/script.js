const message = document.querySelector("#message");
const button = document.querySelector("#changeButton");

button.addEventListener("click", () => {
  message.textContent = "Nice! You changed the page with JavaScript.";
  message.style.fontWeight = "bold";
});
