window.addEventListener("scroll", () => {
  const nav = document.getElementById("menuneonlogo");
  let navBar = document.getElementById("bisMenu");
  if (window.scrollY >= 128) {
    nav.style.position = "fixed";
    navBar.style.position = "initial";
  } else if (window.scrollY <= 128) {
    nav.style.position = "relative";
    nav.style.marginTop = "0px";
  } 
});

document.getElementById("btn").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  let btnClose = document.getElementById("btnClose");
  let btnMenu = document.getElementById("btn");
  nav.style.animation = "bisMenuOpen";
  nav.style.animationDuration = "500ms";
  nav.style.marginTop = "0px";
  btnClose.style.animation = "btnMenuOpen";
  btnClose.style.animationDuration = "300ms";
  btnClose.style.zIndex = "2";
  btnClose.style.opacity = "1";
  btnClose.style.color = "$color-2";
  btnMenu.style.animation = "btnMenuOpen";
  btnMenu.style.animationDuration = "300ms";
  btnMenu.style.zIndex = "1";
  btnMenu.style.opacity = "0";
});

document.getElementById("btnClose").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  let btnMenu = document.getElementById("btn");
  let btnClose = document.getElementById("btnClose");
  nav.style.animation = "bisMenuClose";
  nav.style.marginTop = "-50px";
  nav.style.zIndex = "1",
  nav.style.animationDuration = "500ms";
  btnMenu.style.animation = "btnMenuOpen";
  btnMenu.style.animationDuration = "300ms";
  btnMenu.style.zIndex = "2";
  btnMenu.style.opacity = "1";
  btnClose.style.animation = "btnMenuOpen";
  btnClose.style.animationDuration = "300ms";
  btnClose.style.zIndex = "1";
  btnClose.style.opacity = "0";
  btnClose.style.color = "black";
});
