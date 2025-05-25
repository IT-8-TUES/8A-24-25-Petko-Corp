function toggleLightMode() {
  document.body.classList.toggle("light-mode");

  const button = document.querySelector('.mode-toggle');
  if (document.body.classList.contains("light-mode")) {
    button.textContent = "Switch to Dark Mode";
  } else {
    button.textContent = "Switch to Light Mode";
  }
}
