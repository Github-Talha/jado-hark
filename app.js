document.getElementById("dropdown").addEventListener("click", showMoreServices);

function showMoreServices() {
  const hidden = document.getElementById("hiddenService");
  hidden.classList.toggle("hidden");
  const upToDownArrow = document.getElementById("upArrow");
  upToDownArrow.style = "transform: rotate(180deg);";
}

document.getElementById("buying").addEventListener("click", function () {
  window.location.href = "buying.html";
});
document.getElementById("selling").addEventListener("click", function () {
  window.location.href = "selling.html";
});
document.getElementById("selling2").addEventListener("click", function () {
  window.location.href = "selling.html";
});

