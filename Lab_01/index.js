let navbar = document.getElementById("navbar");
let navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  scrollpos = window.scrollY;
  if (scrollpos > navHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
