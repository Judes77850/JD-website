window.addEventListener("scroll", () => {
  const nav = document.getElementById("phantomMenu");
  if (window.scrollY >= 250) {
    nav.style.position = "fixed";
    nav.style.opacity = "1";
    nav.style.marginTop = "0";
    nav.style.zIndex = "1";
    nav.style.visibility = "visible";
    nav.style.transitionDuration = "300ms";
  } else {
    nav.style.visibility = "hidden";
    nav.style.transitionDuration = "0ms";
  }
});
