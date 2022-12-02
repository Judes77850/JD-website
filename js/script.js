// showMenu(menu);

window.addEventListener("scroll", () => {
  const nav = document.getElementById("menuneonlogo");
  let navBar = document.getElementById("bisMenu");
  const box = document.getElementById("neonlogobox");
  if (window.scrollY >= 140) {
    box.style.margin = "auto";
    box.style.marginTop = "10px";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "space-between";
    box.style.alignItems = "center";
    box.style.width = "100%";
    nav.style.position = "fixed";
    nav.style.margin = "auto";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";
    nav.style.alignItems = "center";
    nav.style.zIndex = "1";
    nav.style.transitionDuration = "300ms";
    nav.style.backgroundColor = "black";
  } else if (window.scrollY <= 140) {
    nav.style.position = "initial";
    nav.style.backgroundColor = "";
    nav.style.marginTop = "0px";
    navBar.style.position = "relative";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  let btnClose = document.getElementById("btnClose");
  let btnMenu = document.getElementById("btnMenu");
  nav.style.animation = "bisMenuOpen";
  nav.style.animationDuration = "500ms";
  nav.style.visibility = "visible";
  nav.style.position = "fixed";
  nav.style.height = "auto";
  nav.style.padding = "0px"
  nav.style.marginBottom = "0px";
  nav.style.marginTop = "50px";
  nav.style.fontSize = "1.5rem";
  nav.style.width = "90%";
  btnClose.style.animation = "btnOpen";
  btnClose.style.animationDuration = "500ms";
  btnClose.style.animationDelais = "0ms";
  btnMenu.style.animation = "btnMenuOpen";
  btnMenu.style.animationDuration = "120ms";
  btnMenu.style.animationDelay = "50ms";
});

document.getElementById("close").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  let btnClose = document.getElementById("btnClose");
  let btnMenu = document.getElementById("btnMenu");
  nav.style.animation = "bisMenuClose"
  nav.style.animationDuration = "500ms";
  nav.style.visibility = "hidden";
  nav.style.height = "0px";
  nav.style.width = "0px";
  nav.style.marginBottom = "0px";
  nav.style.marginTop = "0px";
  nav.style.position = "fixed";
  btnClose.style.animation = "btnClose";
  btnClose.style.animationDuration = "500ms";
  btnMenu.style.animation = "btnMenuClose";
  btnMenu.style.animationDuration = "120ms";
  btnMenu.style.animationDelay = "380ms";
});
