window.addEventListener("scroll", () => {
  const nav = document.getElementById("menuFixed");
  const navBar = document.getElementById("bisMenu");
  const main = document.getElementById("main");
  if (window.scrollY >= 123) {
    nav.style.position = "fixed";
    main.style.marginTop = "80px";
  } else if (window.scrollY <= 123) {
    nav.style.position = "";
    nav.style.marginTop = "0px";
    navBar.style.position = "";
    main.style.marginTop = "30px";
  } 
});

// window.addEventListener("scroll", () =>{
// console.log(window.scrollY);
// })

document.getElementById("btn").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  let btnClose = document.getElementById("btnClose");
  let btnMenu = document.getElementById("btn");
  let navBar = document.getElementById("bisMenu");
  nav.style.animation = "bisMenuOpen";
  nav.style.animationDuration = "500ms";
  nav.style.marginTop = "0px";
  navBar.style.position = "relative";
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
  let navBar = document.getElementById("bisMenu");
  let btnMenu = document.getElementById("btn");
  let btnClose = document.getElementById("btnClose");
  nav.style.animation = "bisMenuClose";
  nav.style.position = "relative";
  nav.style.zIndex = "1",
  nav.style.animationDuration = "500ms";
  navBar.style.marginTop= "-50px";
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

// document.querySelector("fa-plus").addEventListener("click", function () {
//   let info = document.querySelector("hiddenP");
//   info.style.backgroundColor = "pink";
// });