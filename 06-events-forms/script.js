const form = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    status.textContent = "Please fill in both fields.";
    return;
  }

  status.textContent = `Thanks ${name}, your form is ready to submit.`;
  form.reset();
});
