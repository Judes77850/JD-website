window.addEventListener("scroll", () => {
  const nav = document.getElementById("menuFixed");
  const navBar = document.getElementById("bisMenu");
  const main = document.getElementById("main");
  if (window.scrollY >= 123) {
    nav.style.position = "fixed";
    main.style.marginTop = "60px";
  } else if (window.scrollY <= 123) {
    nav.style.position = "";
    nav.style.marginTop = "0px";
    navBar.style.position = "";
    main.style.marginTop = "";
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
  btnMenu.style.animation = "btnMenuOpen";
  btnMenu.style.animationDuration = "300ms";
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
});

// document.querySelector("fa-plus").addEventListener("click", function () {
//   let info = document.querySelector("hiddenP");
//   info.style.backgroundColor = "pink";
// });