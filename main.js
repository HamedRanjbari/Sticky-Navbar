const $ = document;
const nav = $.querySelector("nav")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    nav.classList.add("stick")
  } else {
    nav.classList.remove("stick")
  }
})