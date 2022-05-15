const elhamburgerMenu = document.querySelector(".menu-btn");

elhamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault;
  elhamburgerMenu.classList.toggle("menu-btn_active");
});
