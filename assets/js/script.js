var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
