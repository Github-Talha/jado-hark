document.getElementById("dropdown").addEventListener("click", showMoreServices);

function showMoreServices() {
  const hidden = document.getElementById("hiddenService");
  hidden.classList.toggle("hidden");
  const upToDownArrow = document.getElementById("upArrow");
  upToDownArrow.style = "transform: rotate(180deg);";
}
