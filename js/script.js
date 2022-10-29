// showMenu(menu);

window.addEventListener("scroll", () => {
  const nav = document.querySelector("headerbis");
  if (window.scrollY >= 100) {
    nav.style.position = "fixed";
    nav.style.height = "130px";
    nav.style.opacity = "1";
    nav.style.marginTop = "-20px";
    nav.style.zIndex = "1";
    nav.style.visibility = "visible";
    nav.style.transitionDuration = "300ms";
    nav.style.backgroundColor = "black";
  } else {
    nav.style.visibility = "visible";
    nav.style.transitionDuration = "0ms";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  nav.style.visibility = "visible";
  nav.style.height = "auto";
  nav.style.marginBottom = "30px";
  nav.style.marginTop = "20px";
  nav.style.fontSize = "1.5rem";
  nav.style.width = "90%";
});

// // document.getElementById("btn").addEventListener("click", function () {
// //   let MenuBtn = document.getElementById("btn");
// //   MenuBtn.style.visibility = "hidden";
// // });

document.getElementById("close").addEventListener("click", function () {
  let nav = document.getElementById("bisMenu");
  nav.style.visibility = "hidden";
  nav.style.height = "0px";
  nav.style.width = "0px";
  nav.style.marginBottom = "0px";
});

// function showMenu(showMenu) {
//   let btn = document.getElementById("btn");
//   let close = document.getElementById("close");
//   if (btn.addEventListener("click")) {
//     nav.style.visibility = "visible";
//   } else if (close.addEventListener("click")) {
//     nav.style.visibility = "hidden";
//   } else {
//     console.log("no click");
//   }
// }
