const navFixed = document.getElementById("nav-fixed");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll >= 100) {
    navFixed.classList.add("navbar-fixed-active");
  } else if (scroll < 100) {
    navFixed.classList.remove("navbar-fixed-active");
  }
});
