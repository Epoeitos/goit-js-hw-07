const textInput = document.querySelector("input");
const output = document.querySelector("span");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim() || "Anonymous";
});