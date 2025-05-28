const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const newsLetter = document.getElementById("newsletter");
const success = document.getElementById("success");
const dismissButton = document.getElementById("dismiss-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value) {
    newsLetter.classList.add("hidden");
    success.classList.remove("hidden");
  }
});

dismissButton.addEventListener("click", () => {
  newsLetter.classList.remove("hidden");
  success.classList.add("hidden");
});
