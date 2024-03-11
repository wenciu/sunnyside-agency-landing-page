const mobileMenu = document.querySelector(".nav-mobile");

const hamburger = document.querySelector(".hamburger");

const toggleMobileMenu = () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
};

hamburger.addEventListener("click", toggleMobileMenu);
