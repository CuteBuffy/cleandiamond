const navbarModal = document.querySelector(".header__mini_wrapper");
const navbarBurgerBtn = document.querySelector(".navbar__burger_btn");

navbarBurgerBtn.addEventListener("click", () => {
  const isHidden = getComputedStyle(navbarModal).display === "none";

  if (isHidden) {
    navbarModal.classList.add("open")
    document.body.classList.add("fixed")
  } else {
    navbarModal.classList.remove("open")
    document.body.classList.remove("fixed")
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navbarModal.classList.contains("open")) {
    navbarModal.classList.remove("open")
  }
})