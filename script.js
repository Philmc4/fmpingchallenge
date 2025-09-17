const emailInput = document.getElementById("email");
const notifyButton = document.getElementById("notify");
const errorMessage = document.getElementById("error-message");

notifyButton.addEventListener("click", (e) => {
  if (
    !emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errorMessage.classList.remove("hidden");
    errorMessage.innerText = "Please provide a valid email address";
    emailInput.style.border = "1px solid var(--red-400)";
  } else {
    errorMessage.classList.add("hidden");
    emailInput.style.border = "1px solid var(--blue-200)";
  }
  e.preventDefault();
});
