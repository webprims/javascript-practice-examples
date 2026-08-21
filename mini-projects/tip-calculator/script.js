const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);

  if (bill <= 0 || tipPercent < 0) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;

  result.textContent = `Tip: ₹${tipAmount.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
});
